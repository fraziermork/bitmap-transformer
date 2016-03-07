'use strict';

const fs = require('fs');
const readBitmapHeaders = require(__dirname + '/lib/readBitmapHeaders.js');
const colors = require(__dirname + '/lib/colors.js');







//for stream use fs.createReadStream
//for async us fs.readFile
let bitmap = fs.readFileSync(__dirname + '/img/' + process.argv[2]);
let bitmapData = readBitmapHeaders(bitmap);
console.log('bitmapData is');
console.dir(bitmapData);
console.log(bitmapData.pixelArrayOffset);
console.log(typeof(bitmapData.pixelArrayOffset));

var paletteFlag = null;
if(bitmapData.pixelArrayOffset === 54){
  paletteFlag = false;
} else if (bitmapData.colorDepth === 8 && bitmapData.pixelArrayOffset !== 54){
  paletteFlag = true;
} else {
  console.log('error, unrecognized bitmap type');
}
console.log('paletteFlag is ' + paletteFlag);



if (paletteFlag === true){
  console.log('paletteFlag true');
  for (let i = 54; i < bitmapData.pixelArrayOffset - 4; i += 4){
    colors.invertRGBAColor(i, bitmap);
  }
} else if (paletteFlag === false){
  console.log('paletteFlag false');
  for (let i = bitmapData.pixelArrayOffset; i < bitmapData.numberBytes - 4; i += 4){
    var invertedColorObj = colors.invertRGBAColorObj(colors.readRGBAColor(i, bitmap));
    colors.writeRGBAColor(i, bitmap, invertedColorObj);
    colors.readRGBAColor(i, bitmap);
    // colors.invertRGBAColor(i, bitmap);
  }
}


fs.writeFileSync(__dirname + '/output/' + process.argv[2], bitmap);

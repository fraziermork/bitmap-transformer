'use strict';

const fs = require('fs');
const readBitmapHeaders = require(__dirname + '/lib/readBitmapHeaders.js');
const colors = require(__dirname + '/lib/colors.js');
const os = require('os');

var endianness = os.endianness();
console.log('endianness is ' + endianness);




//for stream use fs.createReadStream
//for async us fs.readFile
let bitmap = fs.readFileSync(__dirname + '/img/' + process.argv[2]);
let bitmapData = readBitmapHeaders(bitmap);

let paletteFlag = null;
if(bitmapData.pixelArrayOffset === 54){
  paletteFlag === false;
} else{
  paletteFlag === true;
}

for (let i = bitmapData.pixelArrayOffset; i < bitmapData.numberBytes - 4; i += 4){
  // var invertedColorObj = colors.invertRGBAColorObj(colors.readRGBAColor(i, bitmap));
  // colors.writeRGBAColor(i, bitmap, invertedColorObj);
  // colors.readRGBAColor(i, bitmap);
  colors.invertRGBAColor(i, bitmap);
  
}



fs.writeFileSync(__dirname + '/output/' + process.argv[2], bitmap);

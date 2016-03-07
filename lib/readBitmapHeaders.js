'use strict';
const os = require('os');

module.exports = function(bitmapBuffer){
  var endianness = os.endianness();
  console.log('endianness is ' + endianness);
  var readInt32 = null;
  var readInt16 = null;
  if(endianness === 'BE'){
    readInt32 = 'readInt32BE';
    readInt16 = 'readInt16BE';
  } else if (endianness === 'LE'){
    readInt32 = 'readInt32LE';
    readInt16 = 'readInt16LE';
  } else {
    console.log('oh shiiiiiiiiii');
  }
  
  var bitmapData = {};
  
  bitmapData.headField = bitmapBuffer.toString('ascii', 0, 2);
  console.log('bitmapData.headField is', bitmapData.headField);
  bitmapData.numberBytes = bitmapBuffer[readInt32](2);
  bitmapData.pixelArrayOffset = bitmapBuffer[readInt32](10);
  bitmapData.paletteSize = bitmapBuffer[readInt32](46);
  bitmapData.height = bitmapBuffer[readInt32](18); 
  bitmapData.width = bitmapBuffer[readInt32](22);
  bitmapData.colorDepth = bitmapBuffer[readInt16](28);
  return bitmapData;
};

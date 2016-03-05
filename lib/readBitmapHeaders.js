'use strict';

module.exports = function(bitmapBuffer){
  var bitmapData = {};
  bitmapData.headField = bitmapBuffer.toString('ascii', 0, 2);
  bitmapData.numberBytes = bitmapBuffer.readInt32LE(2);
  bitmapData.pixelArrayOffset = bitmapBuffer.readInt32LE(10);
  bitmapData.paletteSize = bitmapBuffer.readInt32LE(46);
  bitmapData.height = bitmapBuffer.readInt32LE(18); 
  bitmapData.width = bitmapBuffer.readInt32LE(22);
  bitmapData.colorDepth = bitmapBuffer.readInt16LE(28);
  return bitmapData;
};

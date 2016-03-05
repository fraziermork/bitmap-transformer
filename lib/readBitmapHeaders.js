module.exports = function(bitmapBuffer){
  var bitmapData = {};
  bitmapData.headField = bitmapBuffer.toString('ascii', 0, 2);
  bitmapData.numberBytes = bitmapBuffer.readInt32LE(2);
  bitmapData.pixelArrayOffset = bitmapBuffer.readInt32LE(10);
  return bitmapData;
};

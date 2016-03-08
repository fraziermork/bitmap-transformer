'use strict';

let colors = {};

colors.readRGBAColor = function(index, bitmapBuffer){
  let colors = {};
  colors.r = bitmapBuffer.readUInt8(index);
  colors.g = bitmapBuffer.readUInt8(index + 1);
  colors.b = bitmapBuffer.readUInt8(index + 2);
  colors.a = bitmapBuffer.readUInt8(index + 3);
  console.log('colors at index ' + index);
  console.dir(colors);
  return colors;
};

colors.invertRGBAColorObj = function(colorsObj){
  let colorList = ['r', 'g', 'b', 'a'];
  colorList.forEach(function(cur){
    var thisColor = colorsObj[cur];
    colorsObj[cur] = 255 - thisColor;
  });
  return colorsObj;
};

colors.writeRGBAColor = function(index, bitmapBuffer, colorsObj){
  bitmapBuffer.writeUInt8(colorsObj.r, index);
  bitmapBuffer.writeUInt8(colorsObj.g, index + 1);
  bitmapBuffer.writeUInt8(colorsObj.b, index + 2);
  bitmapBuffer.writeUInt8(colorsObj.a, index + 3);
};

colors.invertRGBAColor = function(index, bitmapBuffer){
  bitmapBuffer.writeUInt8(255 - bitmapBuffer.readUInt8(index), index);
  bitmapBuffer.writeUInt8(255 - bitmapBuffer.readUInt8(index + 1), index + 1);
  bitmapBuffer.writeUInt8(255 - bitmapBuffer.readUInt8(index + 2), index + 2);
  bitmapBuffer.writeUInt8(255 - bitmapBuffer.readUInt8(index + 3), index + 3);
};


module.exports = colors;

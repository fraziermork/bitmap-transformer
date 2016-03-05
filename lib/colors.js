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

colors.invertRGBAColor = function(colorsObj){
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




module.exports = colors;

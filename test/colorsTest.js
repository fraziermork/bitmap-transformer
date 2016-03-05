'use strict';

const expect = require('chai').expect;
// const fs = require('fs');
const colors = require(__dirname + '/../lib/colors.js');

describe('colors:', function(){
  it('should invert the colors of an RGBA object', function(){
    let input = {
      r: 1,
      g: 255,
      b: 0,
      a: 100
    };
    let expected = {
      r: 254,
      g: 0,
      b: 255,
      a: 155
    };
    expect(colors.invertRGBAColor(input)).to.eql(expected);
  });
});

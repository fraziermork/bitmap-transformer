'use strict';
const expect = require('chai').expect;
const fs = require('fs');
const readBitmapHeaders = require(__dirname + '/../lib/readBitmapHeaders.js');




//use ls -alsk to figure out how big bitmap should be
describe('readBitmapHeadersTest:', function(){
  it('should return object that lists the bitmap headers from a bitmap without palette', function(done){
    let bitmap = fs.readFileSync(__dirname + '/../img/non-palette-bitmap.bmp');
    let bitmapData = readBitmapHeaders(bitmap);
    // console.log('bitmapData is:');
    // console.dir(bitmapData);
    expect(bitmapData).to.have.property('headField');
    expect(bitmapData).to.have.property('numberBytes');
    expect(bitmapData).to.have.property('pixelArrayOffset');
    expect(bitmapData.numberBytes).to.equal(30054);
    done();
    // throw new Error('readBitmapHeadersTest fail');
  });
  it('should return object that lists the bitmap headers from a bitmap with palette', function(done){
    let bitmap = fs.readFileSync(__dirname + '/../img/palette-bitmap.bmp');
    let bitmapData = readBitmapHeaders(bitmap);
    // console.log('bitmapData is:');
    // console.dir(bitmapData);
    expect(bitmapData).to.have.property('headField');
    expect(bitmapData).to.have.property('numberBytes');
    expect(bitmapData).to.have.property('pixelArrayOffset');
    expect(bitmapData.numberBytes).to.equal(11078);
    done();
    // throw new Error('readBitmapHeadersTest fail');
  });
  
});

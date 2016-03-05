const fs = require('fs');
const readBitmapHeaders = require(__dirname + '/lib/readBitmapHeaders.js');
const invertColors = require(__dirname + '/lib/invertColors.js');

//for stream use fs.createReadStream
//for async us fs.readFile
let bitmap = fs.readFileSync(__dirname + '/' + process.argv[2]);
let bitmapData = readBitmapHeaders(bitmap);

'use strict';

const path = require('path');
const joinPath = url => path.join(__dirname, url);

console.log('path', process.cwd(), __dirname);

module.exports = joinPath;

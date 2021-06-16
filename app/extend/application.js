'use strict';

const path = require('path');

module.exports = {
  // 方法扩展
  package(key) {
    const pkg = getPackage();
    return key ? pkg[key] : pkg;
  },
  
  // 属性扩展
  get allPackage() {
    return getPackage();
  },
};

function getPackage() {
  // /Users/lulongwen/Sites/珑文汽修/egg-server/package.json
  const filePath = path.join(process.cwd(), 'package.json');
  const pkg = require(filePath);
  return pkg;
}

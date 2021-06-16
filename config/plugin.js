'use strict';

const path = require('path');
const pathJoin = url => path.join(__dirname, url);

/** @type Egg.EggPlugin */
// http参数验证
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

// 模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// mysql 数据库操作
// exports.sequelize = {
//   enable: true,
//   package: 'egg-sequelize',
// };

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

// exports.cors = {
//   enable: true,
//   package: 'egg-cors'
// }

// 登录鉴权
// exports.auth = {
//   enable: true,
//   path: pathJoin('../lib/plugin/egg-auth'),
// };

exports.info = {
  enable: true,
  path: pathJoin('../lib/plugin/egg-info'),
  // 本地的不能使用 package属性，用 path；package指的是 npm包的名称；
  // path是本地的 plugins，path和 package是互斥的，只能选择一个
};

exports.notFound = {
  enable: true,
  path: pathJoin('../lib/plugin/egg-notFound'),
};

// exports.allowHosts = {
//   enable: true,
//   path: pathJoin('../lib/plugin/egg-allowHosts'),
// };
//
// exports.interfaceLimit = {
//   enable: true,
//   path: pathJoin('../lib/plugin/egg-interfaceLimit'),
// };
//
// exports.interfaceCache = {
//   enable: true,
//   path: pathJoin('../lib/plugin/egg-interfaceCache'),
// };

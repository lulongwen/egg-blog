'use strict';

const fs = require('fs');
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  
  const config = exports = {};
  
  // 修改端口，默认为 7001
  config.cluster = {
    listen: {
      path: '',
      port: 8080,
      // hostname: '0.0.0.0',
      hostname: '127.0.0.1',
    },
  };
  
  config.siteFile = {
    // 读取本地文件
    '/favicon.ico': fs.readFileSync(path.join(__dirname, 'favicon.png')),
    // '/favicon.ico': 'https://v5.bootcss.com/docs/5.0/assets/img/favicons/favicon.ico',
  };
  
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1619445330659_8680';
  
  // add your middleware config here
  config.middleware = [ 'httpLog', 'httpError', 'forbiddenIP' ];
  config.httpLog = { // 中间件参数
    type: 'all',
  };
  config.forbiddenIP = {
    exclude: [ '192.168.9.10' ],
  };
  
  // config.allowHosts = [ 'localhost:8000', '127.0.0.1:8000' ];
  //
  // config.interfaceLimit = {
  //   maxCount: 30, // 最多请求个数
  //   time: 3 * 1000, // 间隔时间
  // };
  //
  // config.interfaceCache = {
  //   expire: 10,
  //   include: [ '/api/user/detail' ],
  // };
  
  // 安全验证
  config.security = {
    csrf: {
      enable: false, // 关闭 csrf
      ignoreJSON: true,
    },
    // 允许跨域访问, 添加白名单
    // domainWhiteList: ['*'],
    domainWhiteList: [ 'http://localhost:3000' ],
  };
  
  // config.cors = {
  //   origin: 'http://localhost:3000', // 只允许这个域进行访问接口
  //   credentials: true, // 开启认证
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  // };
  
  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
    // root: path.join(appInfo.baseDir, 'app/html'),, // [].join(',')
  };
  
  config.notfound = {
    pageUrl: '/404.html',
  };
  
  // 设置 session的 key
  config.session = {
    key: 'QIXIU',
    httpOnly: true,
    maxAge: 1000 * 60, // 60秒，默认单位 ms
    renew: true, // 默认 false，会自动刷新 session
  };
  
  // plugins插件配置
  config.auth = {
    // 不验证登录的路由
    exclude: [ '/index', '/index.html', '/', '/user', '/login', '/logout' ],
  };
  
  // change to your own sequelize configurations
  // config.sequelize = {
  //   dialect: 'mysql',
  //   host: 'localhost',
  //   port: 3306,
  //   database: 'qixiu',
  //   username: 'root', // user
  //   password: 'root',
  //   define: {
  //     timestamps: false, // 自动添加时间戳
  //     freezeTableName: true, // 使用原始表名称，不需要额外的处理
  //   },
  // };
  
  // config.jwt = {
  //   secret: 'jwt-secret',
  // };
  //
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: '127.0.0.1',
  //     password: '',
  //     db: 0,
  //   },
  // };
  
  // add your user config here
  const userConfig = {
    myAppName: 'qixiu',
    salt: 'secret',
    redisExpire: 60 * 60 * 24,
  };
  
  return {
    ...config,
    ...userConfig,
  };
};

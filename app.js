'use strict';

module.exports = app => {
  
  // 将 session保存到内存中
  const store = {};
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
      store.maxAge = maxAge;
    },
    async destroy(key) {
      store[key] = null;
    },
  };
  
  // 将 plugin插件放入数组中
  const { coreMiddleware } = app.config;
  const plugins = [
    'notFound',
    // 'auth',
  ];
  app.config.coreMiddleware = [
    ...coreMiddleware,
    ...plugins,
  ];
  // app.config.coreMiddleware.push('auth');
};

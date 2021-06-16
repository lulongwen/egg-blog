'use strict';

/**
 * @param {Egg.Application} app - egg application
 * app 就是 Egg的实例
 */
module.exports = app => {
  const { router, controller } = app;
  // const userExist = app.middleware.userExist();
  
  router.get('/', controller.home.index);
  router.get('/index.html', controller.home.index);
  
  router.get('/oauth2.0/authorize', controller.oauth.index);
  
  // router.get('/sku/:id', controller.sku.index);
  // router.get('/setToken', controller.sku.setToken);
  // router.get('/login', controller.login.index);
  
  // 受保护的路由，必须登录才能访问
  // router.post('/order', userExist, controller.orders.order);
  router.get('/404.html', controller.error.notFound);
};

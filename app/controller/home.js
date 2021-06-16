'use strict';
const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, 启动项目成功';
    
    const res = await ctx.service.sku.index();
    // ctx.body = res;
    // 必须要加 await，否则路由 404
    await ctx.render('index.html', res);
  }
}

module.exports = HomeController;

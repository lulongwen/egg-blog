'use strict';
const { Controller } = require('egg');

class OauthController extends Controller {
  async index() {
    const { ctx } = this;
    
    // const res = await ctx.model.Sku.findByPk(201);
    // console.log('model', res);
    // 必须要加 await，否则路由 404
    await ctx.render('oauth.html');
  }
}

module.exports = OauthController;


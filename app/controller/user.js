'use strict';
const { Controller } = require('egg');

class SkuController extends Controller {
  async index() {
    const { ctx } = this;
    // 查询数据库
    const option = {
      where: { id: 1 },
      limit: 1,
      offset: 1,
    };
    const res = await ctx.model.User.findAll(option);
    ctx.body = res;
  }
  
  async add() {
    const { ctx } = this;
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      status: 200,
      data: res,
    };
  }
}

module.exports = SkuController;


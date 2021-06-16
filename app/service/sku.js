'use strict';

const Service = require('egg').Service;

class SkuService extends Service {
  async index() {
    const { app } = this;
    console.log('sku service', Object.keys(app));
    return {
      id: 100,
      name: 'egg:controller',
    };
  }
  
  async eggMysql() {
    const { mysql } = this.app;
    const res = mysql.select('user');
    return res;
    // controller
    // const res = await this.ctx.service.sku.eggMysql();
  }
}

module.exports = SkuService;


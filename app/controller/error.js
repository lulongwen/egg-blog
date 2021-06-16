'use strict';
const { Controller } = require('egg');

class ErrorController extends Controller {
  async notFound() {
    const { ctx } = this;
    await ctx.render('404.html');
  }
}

module.exports = ErrorController;

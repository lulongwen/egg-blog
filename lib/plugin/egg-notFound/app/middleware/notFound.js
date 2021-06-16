'use strict';

/* eslint-disable no-unused-vars */
module.exports = (options, app) => {
  return async (ctx, next) => {
    await next();
    
    if (ctx.status === 404 && !ctx.body) {
      // 如果是 .html就跳转到 404.html
      const include = ctx.request.url.includes('.html');
      if (include) {
        return ctx.redirect('/404.html');
      }

      ctx.body = {
        status: 404,
        message: 'not found',
      };
    }
  };
};

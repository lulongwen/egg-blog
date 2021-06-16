'use strict';

/**
 * 拦截特殊 IP,防止爬虫，要屏蔽的IP：从数据库获取，从参数传入
 * @param options 中间件的配置项,框架会将 app.config[${middlewareName}] 传递进来
 * @param app 当前应用 Application 的实例
 * @returns {(function(*, *): Promise<void>)|*}
 */
module.exports = (options, app) => {
  return async (ctx, next) => {
    const { ip } = ctx.request;
    const match = options.exclude.find(item => item === ip);
    
    if (match) {
      ctx.body = {
        status: 403,
        message: '已禁止非法的请求',
      };
      return;
    }

    await next();
  };
};

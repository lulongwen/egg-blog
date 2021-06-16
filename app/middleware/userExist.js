'use strict';

/**
 * 判断用户是否存在
 * @param options
 * @param app
 * @returns {(function(*, *): Promise<void>)|*}
 */
module.exports = (options, app) => {
  return async (ctx, next) => {
    const user = true;
    // const user = await ctx.service.user.getOne(ctx.username);
    console.log('options', options, app);
    if (!user) {
      ctx.body = {
        status: 403,
        message: '您无权限访问，请联系管理员',
      };
      return;
    }
    
    await next();
  };
};

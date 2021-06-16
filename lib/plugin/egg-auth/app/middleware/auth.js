'use strict';

module.exports = options => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    const { user } = ctx.session;
    // const user = await ctx.app.redis.get(ctx.username);
    // 比较 redis 里存的用户名和请求传过来的是否相等
    // const user = username ? username === token : username;
    
    // '/index.html?id=123&name=ok'.split('?')
    const [ path ] = url.split('?');
    // 排除的白名单
    const include = options.exclude.includes(path);
    // console.log('options', options, url);
    
    if (!user && !include) {
      ctx.redirect(`/login?callback=${url}`);
      // ctx.body = {
      //   status: 1001,
      //   message: '用户未登录',
      // };
      return; // 必须要 return，否则下面的代码会执行
    }
    
    await next();
  };
};

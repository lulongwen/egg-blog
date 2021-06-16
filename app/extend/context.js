'use strict';

// context属性和方法的扩展和 application类似
module.exports = {
  // 获取get 或 post的参数，ctx.params
  params(key) {
    const { method, body } = this.request;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    }
    return key ? body[key] : body;
  },
  
  get user() {
    const { token } = this.request.header;
    let userData;
    if (token) {
      // 解析 jwt
      // this.app.jwt.verify(token, this.app.config.jwt.secret)
    }
    return userData;
  },
};

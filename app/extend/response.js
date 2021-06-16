'use strict';

module.exports = {
  // ctx.response.token = 'ok'
  set token(token) {
    // console.log(this.header);
    return this.set('token', token);
  },
};

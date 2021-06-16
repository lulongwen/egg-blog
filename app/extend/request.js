'use strict';

// this = ctx.request
module.exports = {
  // ctx.request.token
  get token() {
    // console.log(this.header);
    return this.get('token');
  },
};

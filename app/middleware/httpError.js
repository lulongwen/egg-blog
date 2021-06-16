'use strict';

module.exports = (options, app) => {
  return async (ctx, next) => {
    console.log('options', options, app);
    await next();
  };
};

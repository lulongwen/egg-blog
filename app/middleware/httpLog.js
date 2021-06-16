'use strict';

const dayjs = require('moment');
const fs = require('fs');

/**
 * 拦截 http请求，将请求输入到 /logs/http/httpLog.log文件中
 * @param options
 * @param app
 * @returns {(function(*, *): Promise<void>)|*}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (options, app) => {
  return async (ctx, next) => {
    const start = Date.now();
    const startedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    const {
      method, url, body,
    } = ctx.request;
    
    // app.baseDir = /Users/lulongwen/Sites/珑文汽修/egg-server
    // console.log('options', options, app.baseDir);
    await next();
    
    const log = {
      method, url, body,
      startedAt,
      endAt: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      time: Date.now() - start,
    };
    
    const data = `${dayjs().format('YYYY-MM-DD HH:mm:ss')} [httpLog] ${JSON.stringify(log)} \r\n`;
    
    const output = `${ctx.app.baseDir}/logs/http/httpLog.log`;
    fs.appendFileSync(output, data);
  };
};


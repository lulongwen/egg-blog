'use strict';

const { Subscription } = require('egg');

class getInfo extends Subscription {
  static get schedule() {
    return {
      disable: true, // 关闭定时任务
      interval: 2000,
      // cron: "*/3 * * * * *",
      type: 'worker', // master进程指定一个 worker进程，单独执行定时任务
      // all 每个 worker进程都会执行这个定时任务
    };
  }
  
  async subscribe() {
    const { info } = this.ctx;
    console.log(Date.now(), info, Object.keys(this.ctx));
  }
}

module.exports = getInfo;

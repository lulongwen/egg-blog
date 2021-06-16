'use strict';

const os = require('os');

module.exports = {
  get info() {
    const { totalmem, platform, cpus } = os;
    const data = {
      memoryRaw: totalmem(),
      memory: totalmem() / 1024 / 1024 / 1024 + 'GB',
      platform: platform(),
      cpus: cpus().length,
      url: this.request.url,
    };
    return data;
  },
};

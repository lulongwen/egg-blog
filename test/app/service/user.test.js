'use strict';
const { app, assert } = require('egg-mock/bootstrap');

describe('test /service/user', () => {
  // it('should fetch user', async() => {
  // it.only只运行当前的测试用例，npm test
  it.only('should fetch user', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.findOne(3);
    
    assert(user);
    assert(user.id === 3);
  });
});

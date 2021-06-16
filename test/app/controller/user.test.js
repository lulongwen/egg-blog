'use strict';

const { app } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('should GET /', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user.html');
  });
  
  it('should GET /create', async () => {
    await app.httpRequest()
      .get('/create')
      .expect('hi, egg')
      .expect(200);
  });
});

import app from '../src/index';
import request from 'supertest';


describe('Base API Test', () => {

  it('should return API version and title for the app', done => {
    request(app)
      .get('/api')
      .end((err, res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body.app).toEqual(app.locals.title);
        expect(res.body.apiVersion).toEqual(app.locals.version);

        done();
      });
  });

  it('should return 405 method not allowed for random API hits', done => {
    const randomString = Math.random()
      .toString(36)
      .substr(2, 5);

    request(app)
      .get(`/api/${randomString}`)
      .end((err, res) => {
        expect(res.statusCode).toEqual(404);
        expect(res.body.errors.code).toEqual(404);
        expect(res.body.errors.message).toEqual('URL_NOT_FOUND');

        done();
      });
  });
});


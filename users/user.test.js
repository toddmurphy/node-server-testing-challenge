const request = require('supertest');

const userRouter = require('./userRouter');

//returns the status code 200
describe('GET', function() {
  it('should return 200', function() {
    return request(userRouter)
      .get('/')
      .then(res => {
        //check that the status code is 200
        expect(res.status).toBe(200);
      });
  }); // end of first 'it' block.
}); //end of test

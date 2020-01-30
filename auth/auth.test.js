const Users = require('../users/userModel');
const db = require('../data/dbConfig');

//post a new user to database test
describe('users model', function() {
  describe('test environment', function() {
    it('should use the testing environment', function() {
      expect(process.env.DB_ENV).toBe('testing');
    });
  });

  //   describe('insert()', function() {
  //     beforeEach(async () => {
  //       await db('auth3').truncate();
  //     });
  //     it('adds a new user to the database', async function() {
  //       //call insert, passing in a hobbit
  //       await Users.insert({ username: 'sam' });
  //       await Users.insert({ username: 'frodo' });

  //       //open the database and see that the hobbit is there
  //       const users = await db('authh3');
  //       expect(users).toHaveLength(2);
  //     });
  //   });
});

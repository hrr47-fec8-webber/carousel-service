const app = require('../index.js');
const axios = require('axios');

describe('Server functionality', () => {

  test('server fetches data for random location id between 1 and 100', () => {
    let randomLocation = Math.ceil(Math.random() * 100);
    const callback = (data) => {
      try {
        expect(data.length).not.toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    axios({
      type: 'GET',
      url: `/api/images/${randomLocation}`,
      success: (data) => {
        callback(data);
      }
    });
  });

});

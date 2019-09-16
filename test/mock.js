const { mock, wrapper, random } = require('../index.js')

const api = {
  'GET /123': {
    data: 123
  },
  'GET /mock2': mock({
    'list|10': [{ 'id|+1': 1 }]
  }),
  'GET /mock3': {
    random: random.email()
  }
}

module.exports = wrapper(api)

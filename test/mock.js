const { mock, wrapper } = require('../index.js')

const api = {
  'GET /123': {
    data: 123
  },
  'GET /mock2': mock({
    'list|10': [{ 'id|+1': 1 }]  
  })
}

module.exports = wrapper(api)

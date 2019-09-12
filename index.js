const mockerApi = require('mocker-api')
const mock = require('./mock')
const wrapper = require('./wrapper')

module.mock = mock
module.wrapper = wrapper

module.exports = mockerApi

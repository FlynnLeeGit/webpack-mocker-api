const MockJs = require('mockjs')

const mockerApi = require('mocker-api')
const wrapper = require('./wrapper')

exports.mock = MockJs.mock
exports.random = MockJs.Random
exports.wrapper = wrapper
exports.mockerApi = mockerApi

const express = require('express')
const path = require('path')
const { mockerApi } = require('../index.js')

const app = express()
mockerApi(app, path.resolve(__dirname, 'mock.js'))

app.listen(3000, () => {
  console.log('on 3000')
})

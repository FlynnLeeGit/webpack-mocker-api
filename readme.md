## webpack-mocker-api

use mock in webpack-dev-server

config the webpack.config.js

```js
const mockerApi = require('webpack-mocker-api')

const config = {
  // ...
  devServer: {
    before(app) {
      // use middleware
      mockerApi(app, Path.resolve('./mock/index.js'))
    }
  }

  //...
}
```

mock/index.js

```js
const { wrapper, mock } = require('webpack-mocker-api')

const mockerApis = {
  /**
   * use object
   */
  'GET /_api/v1/example': {
    data: {
      auth: ['123']
    }
  },
  /**
   * use express expression
   */
  'GET /_api/v1/example2'(req, res) {
    res.status(403).json({
      info: {}
    })
  },
  /**
   * 使用mockjs模版
   * mockjs 语法规范 https://github.com/nuysoft/Mock/wiki/Syntax-Specification
   */
  'GET /_api/v1/example3': mock({
    'menus|10': [
      {
        'id|+1': 1,
        name: '@first',
        menu_type: 2
      }
    ]
  })
}

module.exports = wrapper(mockerApis)
```

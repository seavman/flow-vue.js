'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"https://gcb.54lby.com/v1/admin"'  //本地请求前缀
  API_ROOT: '"http://localhost/v1/admin"'  //本地请求前缀
})

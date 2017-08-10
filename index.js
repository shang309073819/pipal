/**
 * Bootstrap core and webpack
 */
require('./core/compile')
require('./core/logger')
require('./core/polyfills')

/**
 * 引导程序
 */
require('babel-register')
require('./server/server')

/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1550300216780_8314';
  config.middleware = ['errorHandler'];

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false
    },
  }

  config.cors = {
    origin: '*',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port 
      host: '127.0.0.1', // Redis host 
      password: null,
      db: 0,
    }
  };

  config.static = {
    // maxAge: 31536000,
    maxAge: 0,
    prefix: '/'
  };
  
  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.html',
    root: [
      path.join(appInfo.baseDir, 'app/view'),
    ].join(',')
  };

  config.signsalt = '!@as#)sgf(&^%!sad@#)(&^%'
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
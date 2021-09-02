/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 10:38:58
 * @LastEditTime: 2021-09-01 20:43:23
 */
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  css: {
    extract: true,
    sourceMap: false,
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('config', resolve('src/config'))
      .set('router', resolve('src/router'))
      .set('services', resolve('src/services'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'));
  },
};

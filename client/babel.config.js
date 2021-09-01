/*
 * @Descripttion:
 * @Author: Lijia Lin
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-09-01 13:24:29
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
};

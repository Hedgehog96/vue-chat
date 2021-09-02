/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 14:07:50
 * @LastEditTime: 2021-09-01 20:43:18
 */
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', 'van'],
      minPixelValue: 1,
    },
  },
};

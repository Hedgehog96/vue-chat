/*
 * @Description:
 * @Author: Bugmakerrrr
 * @Date: 2021-11-03 10:43:18
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-08 23:47:40
 */
import request from './request';

// 注册
const signUp = (data) => {
  return request({
    url: '/signUp',
    method: 'post',
    data,
  });
};

export { signUp };

/*
 * @Description:
 * @Author: Bugmakerrrr
 * @Date: 2021-11-03 10:44:00
 * @LastEditors: Bugmakerrrr
 * @LastEditTime: 2021-11-08 23:47:11
 */
import axios from 'axios';
import { Toast } from 'vant';
import router from '../router';
import store from '../store';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg) => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true,
  });
};

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath,
    },
  });
};

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const handleError = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip('登录过期，请重新登录');
      localStorage.removeItem('token');
      store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在');
      break;
    default:
      console.log(other);
  }
};

const request = (config) => {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3001/api',
    timeout: 10000,
  });

  instance.interceptors.request.use(
    (config) => {
      const token = store.state.token;
      token && (config.headers.Authorization = token);
      return config;
    },
    (error) => {
      Promise.error(error);
    }
  );

  instance.interceptors.response.use(
    (resp) => {
      resp.status === 200 ? Promise.resolve(resp) : Promise.reject(resp);
    },
    (error) => {
      const { response } = error;
      if (response) {
        // 请求已发出，但是不在2xx的范围
        handleError(response.status, response.data.message);
        return Promise.reject(response);
      } else {
        // 处理断网的情况
        // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
        if (!window.navigator.onLine) {
          store.commit('changeNetwork', false);
        } else {
          return Promise.reject(error);
        }
      }
    }
  );

  return instance(config);
};

export default request;

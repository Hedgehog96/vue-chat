/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-11-03 16:45:56
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import services from './services';
import 'assets/styles/index.scss';

Vue.config.productionTip = false;
Vue.prototype.$services = services;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

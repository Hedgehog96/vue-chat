/*
 * @Descripttion:
 * @Author: Lijia Lin
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-09-01 13:37:23
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'assets/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

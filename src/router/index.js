/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-09-01 20:43:51
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from 'views/login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/friends',
    name: 'Friends',
    component: () => import('views/friends/Friends.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !window.localStorage.getItem('isAuthenticated'))
    next({ name: 'Login' });
  else next();
});

export default router;

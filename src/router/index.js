/*
 * @Descripttion:
 * @Author: Bugmakerrrr
 * @Date: 2021-09-01 10:35:03
 * @LastEditTime: 2021-11-01 10:55:44
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
    path: '/register',
    name: 'Register',
    component: () => import('views/register/Register.vue'),
  },
  {
    path: '/chats',
    name: 'Chats',
    component: () => import('views/home/chats/Chats.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('views/home/contact/Contact.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'Register') {
    next();
  } else if (to.name !== 'Login' && !window.localStorage.getItem('isAuthenticated'))
    next({ name: 'Login' });
  else next();
});

export default router;

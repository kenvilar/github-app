import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import Axios from 'axios';

Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Object.defineProperty(Vue.prototype, '$http', {
  get: function() {
    return Axios;
  }
});

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

export const router = new VueRouter({
  routes,
});

export default {
  router,
};

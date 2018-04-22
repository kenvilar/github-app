import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

export const router = new VueRouter({
  routes,
});

export default {
  router,
};

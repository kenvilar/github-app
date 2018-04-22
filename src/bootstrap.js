import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes
});

import './assets/sass/app.scss';

export default {
  router,
};

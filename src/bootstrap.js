import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

//Axios
import Axios from 'axios';


Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

Object.defineProperty(Vue.prototype, '$http', {
  get: function() {
    return Axios;
  }
});

//Routes
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import routes from './routes';

export const router = new VueRouter({
  routes,
});

//Vue Material
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial);

export default {
  router,
};

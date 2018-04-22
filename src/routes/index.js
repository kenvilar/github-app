export default [
  {
    path: '/repositories',
    name: 'repositories',
    components: require('../pages/repositories/Repositories.vue'),
  },
  {
    path: '/user',
    name: 'user',
    components: require('../pages/user/User.vue'),
  },
  {
    path: '/',
    redirect: '/repositories',
  },
  {
    path: '/*',
    redirect: '/repositories',
  },
];

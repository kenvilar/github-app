export default [
  {
    path: '/repositories',
    name: 'repositories',
    component: require('../pages/repositories/repositories'),
  },
  {
    path: '/user',
    name: 'user',
    component: require('../pages/user/user'),
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

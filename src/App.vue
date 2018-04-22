<template>
  <router-view></router-view>
</template>

<script>
  import {router} from './bootstrap';

  export default {
    name: 'App',
    router: router,
  };
</script>

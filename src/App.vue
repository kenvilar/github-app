<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import {router} from './bootstrap';

  export default {
    name: 'GithubApplication',
    router,
  };
</script>

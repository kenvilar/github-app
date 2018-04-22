<template>
  <router-view></router-view>
</template>

<script>
  import {router} from './bootstrap';

  export default {
    name: 'App',
    router,
    mounted: function() {
      this.$http
      .get('https://api.github.com/users/kenvilar')
      .then(res => {
        console.log(res);
      });
    }
  };
</script>

<template>
  <div>
    <pre>{{ user }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
  import {router} from './bootstrap';

  export default {
    name: 'App',
    router,
    data: function() {
      return {
        user: null
      };
    },
    methods: {
      fetchUser: function(username) {
        this.$http.get(`https://api.github.com/users/${username}`).then(res => {
          this.user = res.data;
        });
      },
    },
    mounted: function() {
      this.fetchUser('kenvilar');
    },
  };
</script>

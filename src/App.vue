<template>
  <div class="page-container">
    <md-app md-mode="reveal" md-theme="github-app">
      <md-app-toolbar class="md-medium">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">Github Application</h2>
        <md-field class="md-toolbar-offset" style="flex: 1">
          <label>Initial Value</label>
          <md-input placeholder="Search Username"></md-input>
        </md-field>
      </md-app-toolbar>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import {router} from './bootstrap';

  export default {
    name: 'App',
    router,
    data: function() {
      return {
        user: null,
      };
    },
    methods: {
      fetchUser: function(username) {
        this.$http.get(`users/${username}`).then(res => {
          this.user = res.data;
        });
      },
    },
    mounted: function() {
      this.fetchUser('kenvilar');
    },
  };
</script>

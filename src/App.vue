<template>
  <div class="page-container">
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Github Application</h2>
      <md-field class="md-toolbar-offset" style="flex: 1">
        <md-input placeholder="Search Username"/>
      </md-field>
    </md-toolbar>
    <md-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button" md-elevation="0" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>
      </md-list>
    </md-drawer>
    <md-content>
      <router-view/>
    </md-content>
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
        menuVisible: false
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

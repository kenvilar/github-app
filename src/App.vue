<template>
  <div class="page-container">
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Github Application</h2>
      <md-field class="md-toolbar-offset" style="flex: 1">
        <md-input placeholder="Search Username" v-model="username"/>
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
  import lodash from 'lodash';
  import {router} from './bootstrap';

  export default {
    name: 'App',
    router,
    data: function() {
      return {
        user: null,
        repos: null,
        menuVisible: false,
        username: null,
      };
    },
    watch: {
      username: function(username) {
        this.setUsername(username);
      }
    },
    methods: {
      fetchUser: function(username) {
        this.$http.get(`users/${username}`).then(res => {
          this.user = res.data;
        });
      },
      fetchRepositories: function(username) {
        this.$http.get(`users/${username}/repos`).then(res => {
          this.repos = res.data;
        });
      },
      setUsername: lodash.debounce(function(username) {
        if (username) {
          this.fetchUser(username);
          this.fetchRepositories(username);
        }

        if (!username) {
          this.user = null;
          this.repos = null;
        }

        console.log(username);
      }, 500)
    },
    mounted: function() {
      //todo
    },
  };
</script>

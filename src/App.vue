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
          <!--<span class="md-list-item-text" :to="{name: 'repositories'}">Repositories</span>-->
          <router-link :to="{name: 'repositories'}">
            <a @click="menuVisible = !menuVisible">Repositories</a>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link :to="{name: 'user'}">
            <a @click="menuVisible = !menuVisible">User</a>
          </router-link>
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
        repos: [],
        menuVisible: false,
        username: null,
      };
    },
    watch: {
      username: function(username) {
        this.setUsername(username);
      },
    },
    methods: {
      fetchUser: function(username) {
        this.$http.get(`users/${username}`).then(({data}) => {
          this.user = data;
        });
      },
      fetchRepositories: function(username) {
        this.$http.get(`users/${username}/repos`).then(({data}) => {
          this.repos = data;
        });
      },
      setUsername: lodash.debounce(function(username) {
        if (username) {
          this.fetchUser(username);
          this.fetchRepositories(username);
        }

        if (!username) {
          this.user = null;
          this.repos = [];
        }

        console.log(username);
      }, 500),
    },
    mounted: function() {
      //todo
    },
  };
</script>

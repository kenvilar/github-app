<template>
  <div>

    <md-table md-card>

      <md-table-toolbar>
        <h1 class="md-title">Repositories</h1>
      </md-table-toolbar>

      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Description</md-table-head>
        <md-table-head>Number of Stars</md-table-head>
        <md-table-head>Number of Forks</md-table-head>
        <md-table-head>Number of Open Issues</md-table-head>
        <md-table-head>language</md-table-head>
        <md-table-head>Size</md-table-head>
      </md-table-row>

      <md-table-row v-for="repo in repos" :key="repo.id">
        <md-table-cell>
          <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
        </md-table-cell>
        <md-table-cell>{{ repo.description }}</md-table-cell>
        <md-table-cell>{{ repo.stargazers_count }}</md-table-cell>
        <md-table-cell>{{ repo.forks_count }}</md-table-cell>
        <md-table-cell>{{ repo.open_issues_count }}</md-table-cell>
        <md-table-cell>{{ repo.language }}</md-table-cell>
        <md-table-cell>{{ repo.size }}kb</md-table-cell>
      </md-table-row>

      <md-table-row v-if="repos.length === 0">
        <md-table-cell colspan="7">No repositories found.</md-table-cell>
      </md-table-row>

    </md-table>

    <br>

    <router-link :to="{name: 'user'}">
      To user page
    </router-link>

  </div>
</template>
<script src="./repositories.js"></script>

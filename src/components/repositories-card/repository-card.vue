<template>
  <div>
    <md-table v-model="repositories" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Repositories</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{item}">
        <md-table-cell md-label="Name" md-sort-by="name"><a v-bind:href="item.html_url" target="_blank">{{ item.name
          }}</a>
        </md-table-cell>
        <md-table-cell md-label="Description">{{ item.description }}</md-table-cell>
        <md-table-cell md-label="Number of Stars" md-sort-by="stargazers_count">{{ item.stargazers_count }}
        </md-table-cell>
        <md-table-cell md-label="Number of Forks" md-sort-by="forks_count">{{ item.forks_count }}</md-table-cell>
        <md-table-cell md-label="Number of Open Issues" md-sort-by="open_issues_count">{{ item.open_issues_count }}
        </md-table-cell>
        <md-table-cell md-label="Language">{{ item.language }}</md-table-cell>
        <md-table-cell md-label="Size" md-sort-by="size">{{ item.size }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>


<script src="./repository-card.js"></script>

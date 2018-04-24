<template>
  <div>

    <repository-card :repositories="repos"></repository-card>

    <br>

    <router-link :to="{name: 'user'}">
      To user page
    </router-link>

  </div>
</template>
<script src="./repositories.js"></script>

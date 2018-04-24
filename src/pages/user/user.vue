<template>
  <div>

    <user-card v-if="user" :user="user"></user-card>

    <br>
    <router-link :to="{name: 'repositories'}">
      To repositories page
    </router-link>
  </div>
</template>


<script src="./user.js"></script>

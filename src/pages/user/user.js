import UserCard from './../../components/user-card/user-card.vue';

export default {
  computed: {
    user: function() {
      return this.$root.user;
    },
  },
  components: {
    UserCard,
  },
  template: '<user-card/>',
};

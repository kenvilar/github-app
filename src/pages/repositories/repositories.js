import RepositoryCard from './../../components/repositories-card/repository-card.vue';

export default {
  computed: {
    repos: function() {
      return this.$root.repos;
    },
  },
  components: {
    RepositoryCard,
  },
  template: '<repository-card/>',
  methods: {
    //
  },
};

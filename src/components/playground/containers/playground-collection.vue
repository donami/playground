<template>

  <playground-list :playgrounds="playgrounds"></playground-list>

</template>

<script>
import { mapGetters } from 'vuex';

import PlaygroundList from '../components/playground-list';

export default {
  computed: mapGetters({
    playgrounds: 'playgroundCollection',
  }),
  components: {
    'playground-list': PlaygroundList,
  },
  created() {
    this.$store.dispatch('getAll');
  },
};
</script>

<style scoped>

</style>

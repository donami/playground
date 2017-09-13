<style scoped>



</style>

<template>

<playground-list :playgrounds="filteredPlaygrounds">

</playground-list>

</template>

<script>

import {
  mapGetters,
}
from 'vuex';

import PlaygroundList from '../components/playground-list';

export default {
  computed: {
    ...mapGetters({
      playgrounds: 'playgroundCollection',
      playgroundsLoaded: 'getPlaygroundsLoaded',
    }),
    filteredPlaygrounds() {
      return this.playgrounds.filter(playground => playground.deleted === false);
    },
  },
  components: {
    'playground-list': PlaygroundList,
  },
  created() {
    if (!this.playgroundsLoaded) {

      this.$store.dispatch('getAll');
    }
  },
};

</script>

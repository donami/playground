<style lang="scss" scoped>



</style>

<template>

  <v-container>

    <playground-list
      :playgrounds="playgrounds"
      @save="onSavePlayground"
      @remove="onRemovePlayground"
      @restore="onRestorePlayground">
    </playground-list>

  </v-container>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import PlaygroundList from '../components/playground-list';

export default {
  computed: mapGetters({
    playgrounds: 'playgroundCollection',
  }),
  components: {
    playgroundList: PlaygroundList,
  },
  methods: {

    ...mapActions({
      removePlayground: 'removePlayground',
      updatePlayground: 'updatePlayground',
      restorePlayground: 'restorePlayground',
    }),

    onRemovePlayground(playground) {

      this.removePlayground(playground._id);
    },

    onRestorePlayground(playground) {

      this.restorePlayground(playground._id);
    },

    onSavePlayground(playground) {

      this.updatePlayground(playground);
    },
  },
  created() {
    this.$store.dispatch('getAll');
  },
};

</script>

<style lang="scss" scoped>



</style>

<template>

  <v-container>
    Playgrounds

    <playground-add @submitted="onAddPlayground"></playground-add>
  </v-container>

</template>

<script>

import { mapActions } from 'vuex';

import PlaygroundAdd from './playgrounds-add';

export default {
  components: {
    playgroundAdd: PlaygroundAdd,
  },
  methods: {
    onAddPlayground(playground) {

      this.createPlayground(playground);
    },
    ...mapActions({
      createPlayground: 'createPlayground',
    }),
  },
};

</script>

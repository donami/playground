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

import PlaygroundAdd from '../components/playgrounds-add';

export default {
  methods: {
    onAddPlayground(playground) {

      this.createPlayground(playground);
      this.$router.push({ name: 'admin-dashboard' });
    },
    ...mapActions({
      createPlayground: 'createPlayground',
    }),
  },
  components: {
    playgroundAdd: PlaygroundAdd,
  },
};

</script>

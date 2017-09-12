<style lang="scss" scoped>



</style>

<template>

  <v-container>
    Playgrounds

    <playground-add @submitted="onAddPlayground" :equipments="equipments"></playground-add>
  </v-container>

</template>

<script>

import { mapActions, mapGetters } from 'vuex';

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
  computed: {
    ...mapGetters({
      equipments: 'equipmentCollection',
    }),
  },
  components: {
    playgroundAdd: PlaygroundAdd,
  },
  created() {
    this.$store.dispatch('getAll');
  },
};

</script>

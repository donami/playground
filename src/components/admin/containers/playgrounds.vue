<style lang="scss" scoped>



</style>

<template>

  <v-container style="position: relative" class="mb-5">

    <h1 class="headline">Playgrounds</h1>

    <playground-list
      :playgrounds="playgrounds"
      :equipments="equipments"
      @save="onSavePlayground"
      @remove="onRemovePlayground"
      @restore="onRestorePlayground">
    </playground-list>

    <v-btn
      absolute
      dark
      fab
      top
      small
      right
      router
      :to="{ name: 'admin-playgrounds-add' }"
      class="pink">
      <v-icon>add</v-icon>
    </v-btn>

  </v-container>

</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import PlaygroundList from '../components/playground-list';

export default {
  computed: {
    ...mapGetters({
      equipments: 'equipmentCollection',
      playgroundsLoaded: 'getPlaygroundsLoaded',
    }),
    ...mapState({
      playgrounds: (state) => {
        const playgrounds = state.playground.all.map(playground =>
          state.entities.data.playgrounds[playground]);

        return playgrounds.map(playground => (
          Object.assign({}, playground, {
            equipments: playground.equipments.map(equipmentId =>
              state.entities.data.equipments[equipmentId]),
          })
        ));
      },
    }),
  },
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
    if (!this.playgroundsLoaded) {

      this.$store.dispatch('getAll');
    }
  },
};

</script>

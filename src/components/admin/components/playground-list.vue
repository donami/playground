<style lang="scss" scoped>
</style>

<template>

  <v-container>
    <playground-edit-dialog
      :playground="editing"
      @save="onSave">
    </playground-edit-dialog>

    <ul>
      <li v-for="playground in playgrounds">
        {{ playground.name }}
        <v-btn @click="remove(playground)" v-if="!playground.deleted">Remove</v-btn>
        <v-btn @click="restore(playground)" v-if="playground.deleted">Restore</v-btn>
        <v-btn @click="edit(playground)">Edit</v-btn>
      </li>
    </ul>

  </v-container>


</template>

<script>
import PlaygroundEditDialog from './playground-edit-dialog';

export default {
  props: {
    playgrounds: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    remove(playground) {

      this.$emit('remove', playground);
    },

    edit(playground) {
      this.editing = playground;
    },

    restore(playground) {

      this.$emit('restore', playground);
    },

    onSave(playground) {
      this.$emit('save', playground);
    },
  },
  components: {
    playgroundEditDialog: PlaygroundEditDialog,
  },
};

</script>

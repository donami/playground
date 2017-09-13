<style lang="scss" scoped>
</style>

<template>

  <div>

    <playground-edit-dialog
      ref="editDialog"
      :equipments="equipments"
      @save="onSave">
    </playground-edit-dialog>

    <v-card class="white search-card mb-5">
      <v-card-text>
        <v-text-field append-icon="search" name="search" v-model="search" label="Filter playground..."></v-text-field>
      </v-card-text>
    </v-card>

    <v-data-table v-bind:headers="headers" v-bind:search="search" :items="items" hide-actions class="elevation-1">
      <template slot="items" scope="props">
        <td>
          <router-link :to="{ name: 'playground-view', params: { id: props.item._id }}">
            {{ props.item.name || props.item.location }}
          </router-link>
        </td>
        <td>
          <star-rating
            :rating="props.item.rating"
            :show-rating="false"
            :star-size="20"
            :read-only="true">
          </star-rating>
        </td>
        <td class="text-xs-right">{{ props.item.location }}</td>
        <td>
          <v-btn @click="remove(props.item)" v-if="!props.item.deleted">Remove</v-btn>
          <v-btn @click="restore(props.item)" v-if="props.item.deleted">Restore</v-btn>
          <v-btn @click="edit(props.item)">Edit</v-btn>
        </td>
      </template>
    </v-data-table>

  </div>

</template>

<script>
import PlaygroundEditDialog from './playground-edit-dialog';

export default {
  props: {
    playgrounds: {
      type: Array,
      default: () => [],
    },
    equipments: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    items() {
      return this.playgrounds.map(playground => ({
        _id: playground._id,
        name: playground.name,
        description: playground.description,
        location: playground.location ? playground.location.formatted_address : null,
        image: playground.images.length ? playground.images[0] : null,
        rating: playground.rating,
        deleted: playground.deleted,
      }));
    },
  },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Playground',
          align: 'left',
          sortable: true,
          value: 'name',
        },
        {
          text: 'Rating',
          align: 'left',
          sortable: true,
          value: 'rating',
        },
        {
          text: 'Location',
          value: 'location',
        },
        {
          text: 'Actions',
          value: false,
        },
      ],
    };
  },
  methods: {
    remove(playground) {

      this.$emit('remove', playground);
    },

    edit(item) {

      const playground = this.playgrounds.find(playground => playground._id === item._id);
      this.$refs.editDialog.open(playground);
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

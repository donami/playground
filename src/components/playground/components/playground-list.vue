<template>
<v-layout column>

  <playground-search @searchChange="onSearchChange"></playground-search>

  <v-container>

    <v-card class="mb-5">
      <v-card-title primary-title>
        <div>
          <div class="headline">Find the best playground</div>
          <span class="grey--text">Spend some time with your child on a new playground nearby you</span>
        </div>
      </v-card-title>
      <v-card-text>
        <p>
          Find a new favorite playground for you and your children to enjoy! On this page we have listed over 100,000 playgrounds so that you can find one that suits your needs.
        </p>

        <p>If a you know a playground nearby and want to share, feel free to add it to our site by clicking here.</p>
      </v-card-text>
    </v-card>

    <v-card>
      <v-card-title primary-title>
        <div>
          <div class="headline">Playgrounds nearby</div>
        </div>
      </v-card-title>
      <v-card-text>
        <playground-map :playgrounds="playgrounds"></playground-map>
      </v-card-text>
    </v-card>

    <v-data-table v-bind:headers="headers" v-bind:search="search" :items="items" hide-actions class="elevation-1">
    <template slot="items" scope="props">
      <td>
        <img :src="props.item.image" alt="Image" class="thumb" />
      </td>
      <td>
        <router-link :to="{ name: 'playground-view', params: { id: props.item.id }}">
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
      <td class="text-xs-right">{{ props.item.description }}</td>
      <td class="text-xs-right">{{ props.item.location }}</td>
    </template>
    </v-data-table>

  </v-container>


</v-layout>
</template>

<script>
import PlaygroundSearch from './playground-search';
import PlaygroundMap from './playground-map';

export default {
  name: 'playground-list',
  props: {
    playgrounds: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      headers: [
        {
          text: '',
          value: false,
        },
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
          text: 'Description',
          value: 'description',
        },
        {
          text: 'Location',
          value: 'location',
        },
      ],
      search: '',
    };
  },
  computed: {
    items() {
      return this.playgrounds.map(playground => ({
        id: playground._id,
        name: playground.name,
        description: playground.description,
        location: playground.location ? playground.location.formatted_address : null,
        image: playground.images.length ? playground.images[0] : null,
        rating: playground.rating,
      }));
    },
  },
  methods: {
    onSearchChange(value) {
      this.search = value;
    },
  },
  components: {
    playgroundSearch: PlaygroundSearch,
    playgroundMap: PlaygroundMap,
  },
};
</script>

<style scoped>
.playground-list {
  list-style: none;
}

.thumb {
  max-width: 128px;
}
</style>

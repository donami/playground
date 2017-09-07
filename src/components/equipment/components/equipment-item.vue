<template>

  <v-card>
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{ equipment.name }}</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media :src="equipment.image" height="125px" contain></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>

</template>

<script>
export default {
  props: ['equipment'],
};
</script>

<style lang="scss" scoped>
.thumb {
  img {
    max-width: 100%;
  }
}
</style>

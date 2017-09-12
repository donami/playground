<style lang="scss" scoped>



</style>

<template>

<v-card class="cyan darken-2 white--text mb-3 mt-3">
  <v-container fluid grid-list-lg>
    <v-layout row>
      <v-flex xs12>
        <div>
          {{ location.formatted_address }}
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</v-card>

</template>

<script>

export default {
  props: ['location'],
};

</script>

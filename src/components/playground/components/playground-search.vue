<template>
<v-parallax src="https://vuetifyjs.com/static/doc-images/parallax/material.jpg" height="200">
  <v-layout column align-center justify-center>

    <v-card class="white search-card">
      <v-card-text>
        <v-text-field append-icon="search" name="search" v-model="search" label="Search location..."></v-text-field>
      </v-card-text>
    </v-card>


  </v-layout>
</v-parallax>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search(value, prevValue) {
      if (prevValue !== value) {
        this.$emit('searchChange', value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-card {
    width: 70%;
}
</style>

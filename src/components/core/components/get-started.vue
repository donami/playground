<template>
  <section>
    <v-parallax :src="image" :height="hSize">
      <v-layout column align-center justify-center class="white--text">
        <img src="/static/vuetify.png" alt="Vuetify.js">
        <h1 class="white--text mb-2 display-3">Playparks.io</h1>
        <div class="headline mb-3 text-xs-center">Find the best playpark near you</div>

        <v-btn class="blue lighten-2 mt-5" dark large href="list" router :to="{ name: 'playground-list' }">
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>

</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    'h-size': {
      type: String,
      default: '600',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

<template>
<v-container grid-list-md>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-card>

        <v-toolbar dark class="primary">

          <v-spacer></v-spacer>

          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar-items>

        </v-toolbar>

        <v-card-text>
          <img :src="activeImage" alt="Image">
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-layout>

  <v-layout row wrap>

    <v-flex xs12 md4 v-if="images.length">

      <div class="image-list">
        <div v-for="image in images" v-if="activeImage !== image">
          <img :src="image" alt="Image Preview" v-on:click.stop="activeImage = image">
        </div>
      </div>

    </v-flex>

    <v-flex xs12 md8 v-if="images.length">

      <div class="active-image">
        <img :src="activeImage" v-on:click.stop="dialog = true" alt="Image">
      </div>

    </v-flex>

    <v-flex xs12 v-if="!images.length">
      <img :src="activeImage" alt="Image">
    </v-flex>

  </v-layout>
</v-container>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    activeImage: null,
    dialog: false,
    defaultPlaygroundImage: '/static/no-image-playground.jpg',
  }),
  methods: {
    changeImage(image) {
      this.activeImage = image;
    },
  },
  created() {
    this.activeImage = this.images.length ? this.images[0] : this.defaultPlaygroundImage;
  },
};
</script>

<style lang="scss" scoped>
img {
    max-width: 100%;
}
.image-list {
    img {
        cursor: pointer;
    }
}
.active-image {
    @media (max-width: 960px) {
        display: none;
    }

    cursor: pointer;
}
</style>

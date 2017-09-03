<template>

  <grid>

    <grid-item size="2/6">

      <div class="image-list">
        <div v-for="image in images">
          <img :src="image" alt="Image Preview" v-on:click="changeImage(image)">
        </div>
      </div>

    </grid-item>

    <grid-item size="4/6">

      <div class="active-image">
        <img :src="activeImage" alt="Image">
      </div>

    </grid-item>

  </grid>

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
  }),
  methods: {
    changeImage(image) {
      this.activeImage = image;
    },
  },
  created() {
    this.activeImage = this.images.length ? this.images[0] : null;
  },
};
</script>

<style lang="scss" scoped>
  .image-list {
    img {
      max-width: 100%;
    }
  }
  .active-image {
    img {
      max-width: 100%;
      cursor: pointer;
    }
  }
</style>

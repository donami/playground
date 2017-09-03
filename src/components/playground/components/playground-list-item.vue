<template>

  <div>
    <h4><router-link :to="playground._id">{{ playground.name }}</router-link></h4>

    <div v-if="location">
      {{ location }}
    </div>
  </div>

</template>

<script>
export default {
  props: ['playground'],
  computed: {
    location() {
      const location = this.playground.location;

      if (!location) {
        return null;
      }

      return `${location.address}, ${location.city}`;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>

<template>

  <ul>
    <li v-for="playground in playgrounds">
      <router-link :to="playground._id">{{ playground.name }}</router-link>
    </li>
  </ul>

</template>

<script>

export default {
  name: 'playground-list',
  props: {
    playgrounds: {
      type: Array,
      default: () => [],
    },
  },
};

</script>

<style scoped>

</style>

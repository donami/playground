<template>

  <ul class="playground-list">
    <li v-for="playground in playgrounds">

      <playground-list-item :playground="playground"></playground-list-item>

    </li>
  </ul>

</template>

<script>
import PlaygroundListItem from './playground-list-item';

export default {
  name: 'playground-list',
  props: {
    playgrounds: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    'playground-list-item': PlaygroundListItem,
  },
};

</script>

<style scoped>
  .playground-list {
    list-style: none;
  }
</style>

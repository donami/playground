<template>

  <div>

    <div v-if="!comments.length">
      <p>No comments exists for this playground</p>
    </div>

    <div v-for="comment in comments">
      <comment :comment="comment"></comment>
    </div>

  </div>

</template>

<script>
import Comment from './comment';

export default {
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    comment: Comment,
  },
};
</script>

<style lang="scss" scoped>
</style>

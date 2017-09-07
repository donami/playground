<template>
<v-card>

  <v-card-text>

    <v-card-title>
      <h2 class="headline">Comments ({{ comments.length }})</h2>
    </v-card-title>

    <p v-if="!comments.length">No comments exists for this playground</p>

    <v-list two-line v-if="comments.length">
      <template v-for="comment in comments">
            <comment :comment="comment"></comment>
      </template>
    </v-list>

  </v-card-text>

</v-card>
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

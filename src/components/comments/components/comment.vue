<template>

  <v-list-tile avatar v-bind:key="comment.title">
    <v-list-tile-avatar>
      <img src="../../../assets/profile.png"></v-list-tile-avatar>
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title v-html="comment.name"></v-list-tile-title>
      <v-list-tile-sub-title>{{ comment.createdAt | formatDate }}</v-list-tile-sub-title>
      <v-list-tile-sub-title v-html="comment.body" class="grey--text text--darken-4"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>

</template>

<script>
export default {
  props: ['comment'],
};
</script>

<style lang="scss" scoped>
  .avatar {
    color: #fff;
  }
  .author {
    font-weight: bold;
    border-bottom: #eee 1px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
</style>

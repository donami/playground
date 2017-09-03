<template>

  <grid>

    <grid-item size="1/4">
      [user image]
    </grid-item>

    <grid-item size="3/4">
      <div class="author">
        {{ comment.name }}
      </div>

      {{ comment.body }}
    </grid-item>

  </grid>

</template>

<script>
export default {
  props: ['comment'],
};
</script>

<style lang="scss" scoped>
  .author {
    font-weight: bold;
    border-bottom: #eee 1px solid;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
</style>

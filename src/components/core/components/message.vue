<template>

  <div class="message" v-if="message">
    <h3>{{ message.title }}</h3>
    <p>{{ message.body }}</p>
  </div>

</template>

<script>
export default {
  props: ['message'],
};
</script>

<style lang="scss" scoped>

</style>

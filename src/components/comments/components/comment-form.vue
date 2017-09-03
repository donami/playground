<template>

  <form v-on:submit.prevent="onSubmit">
    <div class="field">
      <label for="name">Your name</label>
      <input type="text" v-model="name">
    </div>

    <div class="field">
      <label for="body">Your comment</label>
      <input type="text" v-model="body">
    </div>

    <button type="submit">Publish</button>
  </form>

</template>

<script>
export default {
  data: () => ({
    body: '',
    name: '',
  }),
  methods: {
    onSubmit() {
      const comment = {
        name: this.name,
        body: this.body,
      };

      this.$emit('submitted', comment);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

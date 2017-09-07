<template>

  <v-form ref="form" v-model="valid">

    <h2 class="headline">Share your thoughts</h2>

    <v-text-field
      label="Name"
      v-model="name"
      :rules="rules"
      required>
    </v-text-field>

    <v-text-field
      label="Comment"
      v-model="body"
      :rules="rules"
      required>
    </v-text-field>

    <v-btn @click="onSubmit">Publish</v-btn>

  </v-form>

</template>

<script>
export default {
  data: () => ({
    body: '',
    name: '',
    valid: false,
    rules: [
      v => !!v || 'This field is required',
    ],
  }),
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$refs.form.validate();

      if (this.valid) {
        const comment = {
          name: this.name,
          body: this.body,
        };

        this.$emit('submitted', comment);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

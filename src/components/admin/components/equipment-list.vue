<style lang="scss" scoped>



</style>

<template>

  <ul>
      <li v-for="equipment in equipments">
        {{ equipment.name }}
        <v-btn @click="remove(equipment)">Remove</v-btn>
      </li>
  </ul>

</template>

<script>

export default {
  props: ['equipments'],
  methods: {
    remove(equipment) {
      this.$emit('remove', equipment);
    },
  },
};

</script>

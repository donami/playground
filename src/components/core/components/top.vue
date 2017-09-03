<template>

  <container>
    <grid>
      <grid-item size="1/4">

        <img src="../../../assets/logo.png">

      </grid-item>
      <grid-item size="3/4">

        <navigation></navigation>

      </grid-item>
    </grid>
  </container>

</template>
<script>
import Navigation from './navigation';

export default {
  components: {
    navigation: Navigation,
  },
};
</script>

<style lang="scss" scoped>
</style>

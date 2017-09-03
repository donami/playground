<template>

  <ul class="navigation">
    <li><router-link to="/list">List</router-link></li>
    <li><router-link to="/contact">Contact</router-link></li>
  </ul>

</template>
<script>
export default {
};
</script>

<style lang="scss" scoped>
  .navigation {
    list-style: none;
    overflow: hidden;

    li {
      float: left;

      a {
        padding: 5px 10px;
      }
    }
  }
</style>

<template>
  <div id="app">

    <top></top>

    <container>
      <router-view></router-view>
    </container>
  </div>
</template>

<script>
import Top from './components/core/components/top';

export default {
  name: 'app',
  components: {
    top: Top,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // width: 1280px;
  // margin: 0 auto;

  a {
    color: #1998e6;
    text-decoration: none;
  }
}
</style>

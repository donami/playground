<template>

<div id="app">
  <v-app light>
    <v-toolbar class="white">
       <v-toolbar-title class="top-titlebar">
         <router-link :to="{ name: 'home'}">
           <img src="/static/vuetify.png" alt="Logo" />
           <h1>Playparks.io</h1>
         </router-link>
       </v-toolbar-title>
     </v-toolbar>
    <main>

      <notification></notification>

      <router-view></router-view>


    </main>

    <footer-bottom></footer-bottom>

  </v-app>
</div>
</template>

<script>
import FooterBottom from './components/core/components/footer-bottom';
import Notification from './components/core/components/notification';

export default {
  name: 'app',
  components: {
    footerBottom: FooterBottom,
    notification: Notification,
  },
};
</script>

<style lang="scss">
.top-titlebar {
  h1 {
    font-size: 1.5rem;
    display: inline-block;
    line-height: 48px;
    padding: 0;
    float: left;
    margin: 0;
    margin-left: 10px;
  }
  img {
    float: left;
    display: inline-block;
    height: 48px;
  }

}
</style>

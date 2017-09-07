// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueFractionGrid from 'vue-fraction-grid';
import Vuetify from 'vuetify';

import App from './App';
import router from './router';
import store from './store';

import formatDate from './filters/date';

import('vuetify/dist/vuetify.min.css');

Vue.filter('formatDate', formatDate);

Vue.config.productionTip = false;

Vue.use(VueFractionGrid, {
  container: '1240px',
});

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

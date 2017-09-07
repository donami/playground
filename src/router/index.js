import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/core/containers/home-page';
import PlaygroundCollection from '@/components/playground/containers/playground-collection';
import PlaygroundSelect from '@/components/playground/containers/playground-select';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/list',
      name: 'playground-list',
      component: PlaygroundCollection,
    },
    {
      path: '/:id',
      name: 'playground-view',
      component: PlaygroundSelect,
    },
  ],
});

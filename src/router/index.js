import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import PlaygroundCollection from '@/components/playground/containers/playground-collection';
import PlaygroundSelect from '@/components/playground/containers/playground-select';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/list',
      name: 'List',
      component: PlaygroundCollection,
    },
    {
      path: '/:id',
      name: 'View',
      component: PlaygroundSelect,
    },
  ],
});

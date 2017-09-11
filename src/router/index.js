import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/core/containers/home-page';
import PlaygroundCollection from '@/components/playground/containers/playground-collection';
import PlaygroundSelect from '@/components/playground/containers/playground-select';
import Admin from '@/components/admin/containers/admin';
import Dashboard from '@/components/admin/containers/dashboard';
import Playgrounds from '@/components/admin/containers/playgrounds';
import PlaygroundAddPage from '@/components/admin/containers/playground-add-page';

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
      path: '/admin',
      component: Admin,
      children: [
        {
          name: 'admin-dashboard',
          path: '',
          component: Dashboard,
        },
        {
          name: 'admin-playgrounds',
          path: 'playgrounds',
          component: Playgrounds,
        },
        {
          name: 'admin-playgrounds-add',
          path: 'playgrounds/add',
          component: PlaygroundAddPage,
        },
      ],
    },
    {
      path: '/:id',
      name: 'playground-view',
      component: PlaygroundSelect,
    },
  ],
});

import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import playground from './modules/playground';
import entities from './modules/entities';
import equipment from './modules/equipment';
import layout from './modules/layout';
// import createLogger from '../../../src/plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    entities,
    playground,
    equipment,
    layout,
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
});

import { normalize } from 'normalizr';
import * as _ from 'lodash';

import * as types from '../mutations';
import playgroundService from '../../services/playground.service';

import { playgroundSchema } from '../schema';

// initial state
const state = {
  all: [],
  selected: null,
  loaded: false,
};

// actions
const actions = {
  getAll ({ commit }) {
    playgroundService.list()
      .then((playgrounds) => {
        const normalized = normalize(playgrounds, [playgroundSchema]);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.RECEIVE_PLAYGROUNDS, normalized.result);
      })
      .catch(err => console.log(err));
  },

  selectPlayground({ commit }, id) {
    playgroundService.get(id)
      .then((playground) => {
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SELECT_PLAYGROUND, normalized.result);
      })
      .catch(err => console.log(err));
  },

  createPlayground({ commit }, payload) {
    playgroundService.create(payload)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Playground was added' });
      })
      .catch(err => console.log(err));
  },

  updatePlayground({ commit }, payload) {
    playgroundService.update(payload)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Playground was updated' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  removePlayground({ commit }, playgroundId) {
    playgroundService.delete(playgroundId)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Playground was removed' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  restorePlayground({ commit }, playgroundId) {
    playgroundService.restore(playgroundId)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Playground was restored' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  addComment({ commit }, payload) {
    playgroundService.addComment(payload.playgroundId, payload.comment)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Your comment was published' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  addRating({ commit }, payload) {
    playgroundService.addRating(payload.playgroundId, payload.rating)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Thanks for rating!' });
      })
      .catch(err => console.log(err));
  },
};

const getters = {
  getPlaygroundsLoaded: state => state.loaded,
};

// mutations
const mutations = {
  [types.RECEIVE_PLAYGROUNDS] (state, playgrounds) {
    state.all = _.uniq([
      ...state.all,
      ...playgrounds,
    ]);
    state.loaded = true;
  },
  [types.SELECT_PLAYGROUND] (state, playground) {
    state.selected = playground;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};

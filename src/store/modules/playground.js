import { normalize } from 'normalizr';
import * as _ from 'lodash';

import * as types from '../mutations';
import playgroundService from '../../services/playground.service';

import { playgroundSchema } from '../schema';

// initial state
const state = {
  all: [],
  selected: null,
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
      })
      .catch(err => console.log(err));
  },

  addComment({ commit }, payload) {
    playgroundService.addComment(payload.playgroundId, payload.comment)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
      })
      .catch(err => console.log(err));
  },

  addRating({ commit }, payload) {
    playgroundService.addRating(payload.playgroundId, payload.rating)
      .then((response) => {
        const playground = response.data;
        const normalized = normalize(playground, playgroundSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
      })
      .catch(err => console.log(err));
  },
};

// mutations
const mutations = {
  [types.RECEIVE_PLAYGROUNDS] (state, playgrounds) {
    state.all = _.uniq([
      ...state.all,
      ...playgrounds,
    ]);
  },
  [types.SELECT_PLAYGROUND] (state, playground) {
    state.selected = playground;
  },
};

export default {
  state,
  mutations,
  actions,
};

import { normalize, schema } from 'normalizr';

import * as types from '../mutations';
import playgroundService from '../../services/playground.service';
import { playgroundSchema } from '../schema';

// initial state
const state = {
  data: {
    equipments: {},
    playgrounds: {},
    comments: {},
  },
};

// actions
const actions = {
};

// mutations
const mutations = {
  [types.LOAD_ENTITIES] (state, entities) {
    state.data.equipments = { ...state.data.equipments, ...entities.equipments };

    state.data.playgrounds = { ...state.data.playgrounds, ...entities.playgrounds };

    state.data.comments = { ...state.data.comments, ...entities.comments };
  },
};

export default {
  state,
  mutations,
  actions,
};

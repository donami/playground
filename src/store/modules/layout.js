import * as types from '../mutations';

// initial state
const state = {
  notification: {
    show: false,
    context: '',
  },
};

// actions
const actions = {
  showNotification ({ commit }, message) {
    const payload = {
      context: message.context,
      text: message.text,
    };

    commit(types.SHOW_NOTIFICATION, payload);
  },
};

// mutations
const mutations = {

  [types.SHOW_NOTIFICATION] (state, payload) {

    state.notification = {
      ...payload,
      show: true,
    };
  },
};

const getters = {
  getShowNotification: state => state.notification,
};

export default {
  state,
  mutations,
  actions,
  getters,
};

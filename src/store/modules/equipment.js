import { normalize } from 'normalizr';
import * as _ from 'lodash';

import * as types from '../mutations';
import equipmentService from '../../services/equipment.service';

import { equipmentSchema } from '../schema';

// initial state
const state = {
  all: [],
  selected: null,
  loaded: false,
};

// actions
const actions = {
  getAll ({ commit }) {
    equipmentService.list()
      .then((equipments) => {
        const normalized = normalize(equipments, [equipmentSchema]);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.RECEIVE_EQUIPMENTS, normalized.result);
      })
      .catch(err => console.log(err));
  },

  selectEquipment({ commit }, id) {
    equipmentService.get(id)
      .then((equipment) => {
        const normalized = normalize(equipment, equipmentSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SELECT_EQUIPMENT, normalized.result);
      })
      .catch(err => console.log(err));
  },

  createEquipment({ commit }, payload) {
    equipmentService.create(payload)
      .then((response) => {
        const equipment = response.data;
        const normalized = normalize(equipment, equipmentSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Equipment was added' });
      })
      .catch(err => console.log(err));
  },

  updateEquipment({ commit }, payload) {
    equipmentService.update(payload)
      .then((response) => {
        const equipment = response.data;
        const normalized = normalize(equipment, equipmentSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Equipment was updated' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  removeEquipment({ commit }, equipmentId) {
    equipmentService.delete(equipmentId)
      .then((response) => {
        const equipment = response.data;
        const normalized = normalize(equipment, equipmentSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Equipment was removed' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

  restoreEquipment({ commit }, equipmentId) {
    equipmentService.restore(equipmentId)
      .then((response) => {
        const equipment = response.data;
        const normalized = normalize(equipment, equipmentSchema);

        commit(types.LOAD_ENTITIES, normalized.entities);
        commit(types.SHOW_NOTIFICATION, { context: 'success', text: 'Equipment was restored' });
      })
      .catch((error) => {
        commit(types.SHOW_NOTIFICATION, { context: 'error', text: error });
      });
  },

};

// mutations
const mutations = {
  [types.RECEIVE_EQUIPMENTS] (state, equipments) {
    state.all = _.uniq([
      ...state.all,
      ...equipments,
    ]);
    state.loaded = true;
  },
  [types.SELECT_EQUIPMENT] (state, equipment) {
    state.selected = equipment;
  },
};

export default {
  state,
  mutations,
  actions,
};

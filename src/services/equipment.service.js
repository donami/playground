import httpService from './http.service';

export default {

  list() {
    return httpService.get('equipment')
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  get(id) {
    return httpService.get(`equipment/${id}`)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  update(equipment) {
    return httpService.put(`equipment/${equipment._id}`, equipment)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  create(equipment) {
    return httpService.post('equipment', equipment)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  delete(equipmentId) {
    return httpService.delete(`equipment/${equipmentId}`)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  restore(equipmentId) {
    return httpService.get(`equipment/${equipmentId}/restore`)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

};

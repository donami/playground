import httpService from './http.service';

export default {

  list() {
    return httpService.get('playground')
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  get(id) {
    return httpService.get(`playground/${id}`)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },
};

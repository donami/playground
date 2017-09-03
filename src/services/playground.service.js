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

  addComment(id, comment) {
    return httpService.put(`playground/${id}/add-comment`, comment)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

};

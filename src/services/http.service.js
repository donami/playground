import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ENDPOINT = 'http://localhost:9001/api';

export default {

  get(url) {
    return Vue.http.get(`${API_ENDPOINT}/${url}`)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },

  put(url, data) {
    return Vue.http.put(`${API_ENDPOINT}/${url}`, data)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },

  post(url, data) {
    return Vue.http.post(`${API_ENDPOINT}/${url}`, data)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },

  delete(url) {
    return Vue.http.delete(`${API_ENDPOINT}/${url}`)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};

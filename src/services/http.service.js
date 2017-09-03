import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const API_ENDPOINT = 'http://localhost:9001/api/';

export default {

  get(url) {
    return Vue.http.get(`${API_ENDPOINT}/${url}`)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },

  put(url, data) {
    console.log('data', data);
    return Vue.http.put(`${API_ENDPOINT}/${url}`, data)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};

<style>

.map-overlay {
  max-width: 600px;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  border-radius: 2px;
}

#map {
  max-width: 550px;
  height: 400px;
  margin: 0 auto;
}

</style>

<template>

<div>

  <div class="map-overlay">

    <div id="map"></div>

  </div>

</div>

</template>

<script>

import GMaps from 'gmaps';
import geolocation from '../../../services/geolocation';

export default {
  props: {
    playgroundPos: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    geolocation.getCurrentPosition()
      .then((position) => {
        const map = new GMaps({
          el: '#map',
          lat: position.lat,
          lng: position.lng,
        });

        map.addMarker({
          lat: position.lat,
          lng: position.lng,
        });

        return map;
      })
      .then((map) => {

        this.playgroundPos.forEach(({ lat, lng }) => {
          map.addMarker({
            lat,
            lng,
            icon: '/static/playground_icon.png',
          });
        });
      })
      .catch(error => console.log(error));
  },
};

</script>

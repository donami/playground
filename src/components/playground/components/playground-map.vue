<style>
.map-overlay {
  max-width: 100%;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  border-radius: 2px;
}

#map {
  max-width: 100%;
  height: 100%;
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
    playgrounds: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    gotoPlayground(ev) {

      // Redirect to playground view
      this.$router.push({
        name: 'playground-view',
        params: {
          id: ev.playground._id,
        },
      });
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

        // Add markers for the playgrounds
        this.playgrounds.forEach((playground) => {

          if (!playground.location || !playground.location.lng || !playground.location.lat) {

            return;
          }

          const {
            lng,
            lat,
          } = playground.location;

          map.addMarker({
            lat,
            lng,
            icon: '/static/playground_icon.png',
            click: this.gotoPlayground,
            playground,
          });
        });
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss" scoped>



</style>

<template>

<v-container>
    <v-card class="grey lighten-4 elevation-0">
        <v-card-text>
            <v-container fluid>
                <v-form ref="form" v-model="valid">

                  <v-layout row>
                      <v-flex xs4>
                          <v-subheader>Name</v-subheader>
                      </v-flex>
                      <v-flex xs8>
                          <v-text-field
                            name="name"
                            v-model="name"
                            :rules="rules"
                            label="Name of the playground">
                          </v-text-field>
                      </v-flex>
                  </v-layout>
                  <v-layout row>
                      <v-flex xs4>
                          <v-subheader>Description</v-subheader>
                      </v-flex>
                      <v-flex xs8>
                        <v-text-field
                          name="description"
                          v-model="description"
                          :rules="rules"
                          label="Describe the playground">
                        </v-text-field>
                      </v-flex>
                  </v-layout>

                  <v-layout row>
                      <v-flex xs4>
                          <v-subheader>Address</v-subheader>
                      </v-flex>
                      <v-flex xs8>
                        <v-text-field
                          name="address"
                          v-model="locateAddress"
                          label="Locate the playground">
                        </v-text-field>

                        <div v-if="location.formatted_address.length">
                          {{ location.formatted_address }}
                        </div>

                      </v-flex>

                      <v-flex xs12>
                        <v-btn @click="getCoords">Locate</v-btn>
                      </v-flex>
                  </v-layout>

                  <v-btn @click="onSubmit">Add</v-btn>

                </v-form>
            </v-container>
        </v-card-text>
    </v-card>
</v-container>

</template>

<script>
import GMaps from 'gmaps';

export default {
  data: () => ({
    name: '',
    description: '',
    locateAddress: '',
    location: {
      lat: '',
      lng: '',
      address: '',
      formatted_address: '',
      city: '',
    },
    valid: false,
    rules: [
      v => !!v || 'This field is required',
    ],
  }),
  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$refs.form.validate();

      if (!this.location.formatted_address.length) {

        console.log('Please select a location for the playpark.');
        return;
      }

      if (this.valid) {
        const comment = {
          name: this.name,
          description: this.description,
          location: this.location,
        };

        this.$emit('submitted', comment);
      }
    },
    getCoords() {
      GMaps.geocode({
        address: this.locateAddress,
        callback: ((results, status) => {
          if (status === 'OK') {

            const location = results[0];

            if (!location) {
              console.log('Unable to find location.');
            }

            const latlng = location.geometry.location;

            this.location.lat = latlng.lat();
            this.location.lng = latlng.lng();

            this.location.formatted_address = location.formatted_address;
            this.location.city = location.address_components[2].long_name;
            this.location.address = `${location.address_components[1].long_name} ${location.address_components[0].long_name}`;

            // map.setCenter(latlng.lat(), latlng.lng());
            // map.addMarker({
            //   lat: latlng.lat(),
            //   lng: latlng.lng()
            // });
          } else {
            console.log('Unable to find location.');
          }
        }),
      });
    },
  },
};

</script>

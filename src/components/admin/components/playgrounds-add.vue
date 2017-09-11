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
import geolocation from '../../../services/geolocation';

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
    onSubmit() {
      event.preventDefault();

      this.$refs.form.validate();

      if (!this.location.formatted_address.length) {

        console.log('Please select a location for the playpark.');
        return;
      }

      if (this.valid) {
        const playground = {
          name: this.name,
          description: this.description,
          location: this.location,
        };

        this.$emit('submitted', playground);
      }
    },
    getCoords() {

      geolocation.getCoords(this.locateAddress)
        .then((location) => {
          this.location = location;
        })
        .catch(error => console.log(error));
    },
  },
};

</script>

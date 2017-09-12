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
                            v-model="form.name"
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
                          v-model="form.description"
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

                        <div v-if="form.location.formatted_address.length">
                          {{ form.location.formatted_address }}
                        </div>

                      </v-flex>

                      <v-flex xs12>
                        <v-btn @click="getCoords">Locate</v-btn>
                      </v-flex>
                  </v-layout>

                  <v-layout row wrap>
                      <v-flex xs12>
                        <h2 class="headline">Equipment</h2>
                      </v-flex>

                      <v-flex xs4>
                          <v-subheader>Equipment</v-subheader>
                      </v-flex>
                      <v-flex xs4>
                        <v-select
                          v-bind:items="equipments"
                          v-model="selectedEquipment"
                          item-text="name"
                          item-value="_id"
                          return-object
                          label="Select"
                          autocomplete
                        ></v-select>
                      </v-flex>
                      <v-flex xs4>
                        <v-btn @click="addEquipment(selectedEquipment)">Add</v-btn>
                      </v-flex>

                  </v-layout>

                  <v-layout row wrap v-if="form.equipments.length">
                    <v-flex xs12>

                      <equipment-list
                        :equipments="form.equipments"
                        @remove="removeEquipment">
                      </equipment-list>

                    </v-flex>
                  </v-layout>

                  <image-upload @uploaded="onImageUpload"></image-upload>

                  <v-btn @click="onSubmit">Add</v-btn>

                </v-form>
            </v-container>
        </v-card-text>
    </v-card>
</v-container>

</template>

<script>
import geolocation from '../../../services/geolocation';
import EquipmentList from './equipment-list';
import ImageUpload from '../../core/components/image-upload';

export default {
  props: ['equipments'],
  data: () => ({
    selectedEquipment: null,
    locateAddress: '',
    form: {
      name: '',
      description: '',
      location: {
        lat: '',
        lng: '',
        address: '',
        formatted_address: '',
        city: '',
      },
      images: [],
      equipments: [],
    },
    valid: false,
    rules: [
      v => !!v || 'This field is required',
    ],
  }),
  methods: {
    onImageUpload(data) {

      this.form.images.push(data.path);
    },

    removeEquipment(equipment) {

      this.form.equipments = this.form.equipments.filter(other => other !== equipment);
    },

    addEquipment(equipment) {

      // Check if equipment already exists
      if (this.form.equipments.find(other => other === equipment)) {

        return;
      }

      this.form.equipments.push(equipment);
      this.selectedEquipment = null;
    },

    onSubmit() {
      event.preventDefault();

      this.$refs.form.validate();

      if (!this.form.location.formatted_address.length) {

        console.log('Please select a location for the playpark.');
        return;
      }

      if (this.valid) {
        const playground = {
          name: this.form.name,
          description: this.form.description,
          location: this.form.location,
          equipments: this.form.equipments,
          images: this.form.images,
        };

        this.$emit('submitted', playground);
      }
    },
    getCoords() {

      geolocation.getCoords(this.locateAddress)
        .then((location) => {
          this.form.location = location;
        })
        .catch(error => console.log(error));
    },
  },
  components: {
    equipmentList: EquipmentList,
    imageUpload: ImageUpload,
  },
};

</script>

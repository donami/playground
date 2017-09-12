<style lang="scss" scoped>



</style>

<template>

  <v-layout row justify-center v-if="form">
    <v-dialog v-model="dialog" persistent fullscreen transition="dialog-bottom-transition" :overlay="false">
      <v-card>
        <v-card-title>
          <span class="headline">Edit Playground</span>
        </v-card-title>
        <v-card-text>
          <v-text-field label="Name" v-model="form.name" required></v-text-field>
          <v-text-field label="Description" v-model="form.description" required></v-text-field>
          <v-text-field
            name="address"
            v-model="locateAddress"
            label="Locate the playground">
          </v-text-field>
          <v-btn @click="getCoords">Locate</v-btn>

          <location-box v-if="form.location.formatted_address.length" :location="form.location"></location-box>

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

          <h2 class="headline">Add images</h2>
          <image-upload
            :images="form.images"
            v-on:uploaded="onImageUpload"
            v-on:removeImage="onRemoveImage">
          </image-upload>

          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="blue--text darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn class="blue--text darken-1" flat @click.native="onSave">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

</template>

<script>
import EquipmentList from './equipment-list';
import ImageUpload from '../../core/components/image-upload';
import LocationBox from './location-box';
import geolocation from '../../../services/geolocation';

export default {
  props: ['playground', 'equipments'],
  data() {
    return {
      dialog: false,
      locateAddress: '',
      selectedEquipment: null,
      form: null,
    };
  },
  methods: {

    onRemoveImage(image) {

      this.form.images = this.form.images.filter(other => image.path !== other);
    },

    onImageUpload(data) {

      this.form = Object.assign({}, this.form, {
        images: [
          ...this.form.images,
          data.path,
        ],
      });
    },

    removeEquipment(equipment) {

      this.form.equipments = this.form.equipments.filter(other => other !== equipment);
    },

    addEquipment(equipment) {

      // Check if equipment already exists
      if (this.form.equipments.find(other => other === equipment)) {

        return;
      }

      this.form = Object.assign({}, this.form, {
        equipments: [...this.form.equipments, equipment],
      });
      this.selectedEquipment = null;
    },
    getCoords() {

      geolocation.getCoords(this.locateAddress)
        .then((location) => {

          this.form.location = location;
        })
        .catch(error => console.log(error));
    },

    onSave() {
      this.$emit('save', this.form);
      this.dialog = false;
    },

    open(playground) {
      this.dialog = true;
      this.form = {
        ...playground,
      };
    },
  },
  components: {
    equipmentList: EquipmentList,
    locationBox: LocationBox,
    ImageUpload,
  },
};

</script>

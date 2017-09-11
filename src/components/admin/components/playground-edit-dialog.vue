<style lang="scss" scoped>



</style>

<template>

  <v-layout row justify-center v-if="form">
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
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

          <div v-if="form.location.formatted_address.length">
            {{ form.location.formatted_address }}
          </div>
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
import geolocation from '../../../services/geolocation';

export default {
  props: ['playground'],
  data() {
    return {
      dialog: false,
      locateAddress: '',
      form: null,
    };
  },
  methods: {
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
  },
  watch: {
    playground() {
      if (this.dialog === false) {
        this.dialog = true;
        this.form = Object.assign({}, this.playground);
      }
    },
  },
};

</script>

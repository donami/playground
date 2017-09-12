<style lang="scss" scoped>



</style>

<template>

  <v-snackbar
    :timeout="timeout"
    :success="context === 'success'"
    :info="context === 'info'"
    :warning="context === 'warning'"
    :error="context === 'error'"
    :primary="context === 'primary'"
    :secondary="context === 'secondary'"
    :multi-line="mode === 'multi-line'"
    :vertical="mode === 'vertical'"
    v-model="snackbar">

      {{ text }}
      <v-btn dark flat @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    showNotification: 'getShowNotification',
  }),
  data() {
    return {
      snackbar: false,
      context: '',
      mode: '',
      timeout: 6000,
      text: '',
    };
  },
  watch: {
    showNotification(value, prevValue) {

      if (value !== prevValue) {
        this.text = value.text;
        this.snackbar = value.show;
        this.context = value.context;
      }
    },
  },
};

</script>

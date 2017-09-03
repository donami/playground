<template>

  <playground-details
    :playground="playground"
    :equipments="equipments"
    :comments="comments">
  </playground-details>

</template>

<script>
import { mapGetters } from 'vuex';

import PlaygroundDetails from '../components/playground-details';

export default {
  computed: mapGetters({
    playground: 'getSelectedPlayground',
    equipments: 'getSelectedPlaygroundsEquipment',
    comments: 'getSelectedPlaygroundsComments',
  }),
  components: {
    'playground-details': PlaygroundDetails,
  },
};
</script>

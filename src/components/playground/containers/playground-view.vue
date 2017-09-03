<template>

  <playground-details
    :playground="playground"
    :equipments="equipments">
  </playground-details>

</template>

<script>
import { mapGetters } from 'vuex';

import PlaygroundDetails from '../components/playground-details';

export default {
  computed: mapGetters({
    playground: 'getSelectedPlayground',
    equipments: 'getSelectedPlaygroundsEquipment',
  }),
  components: {
    'playground-details': PlaygroundDetails,
  },
};
</script>

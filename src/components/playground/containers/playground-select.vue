<template>

  <playground-view></playground-view>

</template>

<script>
import { mapActions } from 'vuex';

import PlaygroundView from './playground-view';

export default {
  methods: {
    ...mapActions({
      selectPlayground: 'selectPlayground',
    }),
  },
  components: {
    'playground-view': PlaygroundView,
  },
  created() {
    this.selectPlayground(this.$route.params.id);
  },
};
</script>

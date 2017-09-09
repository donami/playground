<template>

  <playground-details
    :playground="playground"
    :equipments="equipments"
    :comments="comments"
    @addComment="onAddComment"
    @addRating="onAddRating">
  </playground-details>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
  methods: {
    ...mapActions({
      addComment: 'addComment',
      addRating: 'addRating',
    }),
    onAddComment(comment) {
      const body = {
        playgroundId: this.playground._id,
        comment: {
          ...comment,
        },
      };

      this.addComment(body);
    },
    onAddRating(rating) {

      this.addRating({ playgroundId: this.playground._id, rating });
    },
  },
};
</script>

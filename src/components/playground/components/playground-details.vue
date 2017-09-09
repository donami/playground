<style lang="scss">
.equipments {
    list-style: none;
}
</style>

<template>
<v-container v-if="playground">

  <h1 class="display-1">{{ playground.name }}</h1>

  <star-rating @rating-selected="setRating" :rating="playground.rating"></star-rating>

  <blockquote v-if="playground.description" class="mb-3">
    {{ playground.description }}
  </blockquote>

  <v-layout row wrap>

    <v-flex xs12 md7>

      <playground-images :images="playground.images"></playground-images>

    </v-flex>

    <v-flex xs12 md4 offset-md1>

      <h3 class="headline text-xs-center">Activities to enjoy</h3>

      <v-card>

        <v-list one-line>
          <template v-for="item in equipments">
            <v-list-tile avatar v-bind:key="item.title">
              <v-list-tile-avatar>
                <img v-bind:src="item.image"></v-list-tile-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.name"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>


    </v-flex>

  </v-layout>

  <playground-map :playgrounds="[playground]"></playground-map>

  <comment-list :comments="comments" class="mb-5"></comment-list>

  <v-card>
    <v-card-text>

      <comment-form @submitted="onAddComment"></comment-form>

    </v-card-text>
  </v-card>

</v-container>
</template>

<script>
import EquipmentItem from '../../equipment/components/equipment-item';
import PlaygroundImages from './playground-images';
import PlaygroundMap from './playground-map';
import CommentList from '../../comments/components/comment-list';
import CommentForm from '../../comments/components/comment-form';

export default {
  props: ['playground', 'equipments', 'comments'],
  components: {
    equipmentItem: EquipmentItem,
    playgroundImages: PlaygroundImages,
    commentList: CommentList,
    commentForm: CommentForm,
    playgroundMap: PlaygroundMap,
  },
  methods: {
    onAddComment(comment) {
      this.$emit('addComment', comment);
    },
    setRating(rating) {
      this.$emit('addRating', rating);
    },
  },
};
</script>

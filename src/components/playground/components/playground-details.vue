<template>
  <div v-if="playground">
    <h1>{{ playground.name }}</h1>

    <p v-if="playground.description">
      {{ playground.description }}
    </p>

    <playground-images :images="playground.images"></playground-images>

    <h3>Equipment on this playground</h3>

    <ul class="equipments">
      <li v-for="equipment in equipments">
        <equipment-item :equipment="equipment"></equipment-item>
      </li>
    </ul>

    <comment-list :comments="comments"></comment-list>

    <comment-form @submitted="onAddComment"></comment-form>

  </div>
</template>

<script>
import EquipmentItem from '../../equipment/components/equipment-item';
import PlaygroundImages from './playground-images';
import CommentList from '../../comments/components/comment-list';
import CommentForm from '../../comments/components/comment-form';

export default {
  props: ['playground', 'equipments', 'comments'],
  components: {
    'equipment-item': EquipmentItem,
    'playground-images': PlaygroundImages,
    'comment-list': CommentList,
    'comment-form': CommentForm,
  },
  methods: {
    onAddComment(comment) {
      this.$emit('addComment', comment);
    },
  },
};
</script>

<style lang="scss">
  .equipments {
    list-style: none;
  }
</style>

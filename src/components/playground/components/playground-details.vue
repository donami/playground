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

  </div>
</template>

<script>
import EquipmentItem from '../../equipment/components/equipment-item';
import PlaygroundImages from './playground-images';

export default {
  props: ['playground', 'equipments'],
  components: {
    'equipment-item': EquipmentItem,
    'playground-images': PlaygroundImages,
  },
};
</script>

<style lang="scss">
  .equipments {
    list-style: none;
  }
</style>

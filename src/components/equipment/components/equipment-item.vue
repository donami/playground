<template>

    <grid>
      <grid-item size="1/4" class="thumb">

        <div v-if="equipment.image">
          <img :src="equipment.image" alt="Image" />
        </div>

      </grid-item>
      <grid-item size="3/4">

        <h3>{{ equipment.name }}</h3>

      </grid-item>
    </grid>

</template>

<script>
export default {
  props: ['equipment'],
};
</script>

<style lang="scss" scoped>
.thumb {
  img {
    max-width: 100%;
  }
}
</style>

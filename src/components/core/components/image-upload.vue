<style lang="scss" scoped>

</style>

<template>

  <dropzone id="myVueDropzone" url="http://localhost:9001/api/image-upload/upload" v-on:vdropzone-success="showSuccess">
      <!-- Optional parameters if any! -->
      <input type="hidden" name="token" value="xxx">
  </dropzone>

</template>

<script>
import Dropzone from 'vue2-dropzone';

export default {
  components: {
    Dropzone,
  },
  methods: {
    showSuccess(file, response) {

      this.$emit('uploaded', response.data);
    },
  },
};

</script>

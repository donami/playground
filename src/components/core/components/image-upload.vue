<style lang="scss" scoped>

</style>

<template>

  <dropzone
    ref="dropzone"
    id="dropzone"
    url="http://localhost:9001/api/image-upload/upload"
    v-on:vdropzone-success="showSuccess"
    v-on:vdropzone-removed-file="onRemoveFile">
      <!-- Optional parameters if any! -->
      <input type="hidden" name="token" value="xxx">
  </dropzone>

</template>

<script>
import Dropzone from 'vue2-dropzone';

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Dropzone,
  },
  methods: {
    initializeImages(images) {
      if (!images.length) {

        return;
      }

      images.forEach((image, key) => {
        const img = new Image();
        img.src = image;

        const mockFile = {
          id: key,
          uploaded: true,
          path: image,
          size: 0,
        };

        const fileUrl = img.src;
        this.$refs.dropzone.manuallyAddFile(mockFile,
          fileUrl,
          null,
          null,
          {
            dontSubtractMaxFiles: false,
            addToFiles: true,
          },
        );
      });
    },

    onRemoveFile(file) {

      if (!file.uploaded) {
        return;
      }

      this.$emit('removeImage', file);
    },

    showSuccess(file, response) {

      this.$emit('uploaded', response.data);
    },
  },
  mounted() {
    this.initializeImages(this.images);
  },
};

</script>

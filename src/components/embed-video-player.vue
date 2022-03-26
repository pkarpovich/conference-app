<template>
  <iframe
    class="fullScreen"
    :src="videoUrl"
    frameborder="0"
    seamless="seamless"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "embed-video-player",
  props: {
    videoUrl: String,
  },
});
</script>

<style scoped>
.fullScreen {
  width: 100%;
  height: 100%;
}
</style>

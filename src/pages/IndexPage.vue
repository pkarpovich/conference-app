<template>
  <q-page class="flex">
    <div class="playerContainer">
      <embed-video-player :video-url="videoUrl" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

import EmbedVideoPlayer from "../components/embed-video-player";
import { Config } from "../config";

export default defineComponent({
  name: "IndexPage",
  components: {
    EmbedVideoPlayer,
  },
  data() {
    return {
      videoUrl: Config.mainConferenceVideo,
    };
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.playerContainer {
  display: flex;
  flex-grow: 1;
}
</style>

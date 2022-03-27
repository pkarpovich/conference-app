<template>
  <q-page class="flex">
    <div class="playerContainer">
      <embed-video-player :video-url="videoUrl" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, onUnmounted, watchEffect } from "vue";

import EmbedVideoPlayer from "../components/embed-video-player";
import { TimeSyncService } from "../services/time-sync-service";
import { Config } from "../config";

export default defineComponent({
  name: "IndexPage",
  components: {
    EmbedVideoPlayer,
  },
  async setup() {
    const worldTimestamp = ref(0);
    const videoUrl = ref(Config.mainConferenceVideo);

    const timeSyncIntervalId = setInterval(async () => {
      worldTimestamp.value = await TimeSyncService.getGlobalTime();
    }, Config.timeSyncInterval);

    watchEffect(() => {
      if (worldTimestamp.value >= Config.livePremierTimestamp) {
        videoUrl.value = Config.liveConferenceVideo;
        clearInterval(timeSyncIntervalId);
      }
    });

    onUnmounted(() => {
      clearInterval(timeSyncIntervalId);
    });

    return {
      worldTimestamp,
      videoUrl,
    };
  },
});
</script>

<style scoped>
.playerContainer {
  display: flex;
  flex-grow: 1;
}
</style>

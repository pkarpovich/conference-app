<template>
  <q-page class="flex flex-center">Index</q-page>
</template>

<script>
import { defineComponent } from "vue";

import { Config } from "../config";

export default defineComponent({
  name: "IndexPage",
  setup() {
    console.log(Config.mainConferenceVideo);
    return {};
  },
});
</script>

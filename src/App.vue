<template>
  <div id="app" :class="renderData.random_cover ? 'mask' : ''">
    <templ-pure :renderData="renderData"></templ-pure>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import Pure from "@/components/pure-theme";
import axios from 'axios'; // 直接导入 axios
import yaml from 'js-yaml'; // 直接导入 yaml
import * as CONFIG from "./config";

export default {
  name: "app",
  setup() {
    const renderData = ref({});

    onBeforeMount(async () => {
      const src = await axios.get("./conf.yml");
      renderData.value = yaml.load(src.data);

      document.title = renderData.value.html_title;

      if (renderData.value.random_cover) {
        document.body.style.backgroundImage = `url('${CONFIG.IMG_URL}')`;
      } else {
        document.body.style.backgroundImage = CONFIG.DEFAULT_COVER_RED;
      }
    });

    return {
      renderData
    };
  },
  components: {
    "templ-pure": Pure
  }
};
</script>

<style lang="less" scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px) {
    padding-top: 50%;
    align-items: flex-start;
  }
}
.mask {
  background-color: rgba(102, 102, 102, 0.7);
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
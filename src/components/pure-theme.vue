<!-- pure主题 -->
<template>
  <div class="wide">
    <loading :show="loadingShow"></loading>
    <div class="logo">
      <h1>{{d.logo}}</h1>
    </div>
    <h2 class="motto"><TypedText /></h2>
    <div id="wrapper"
         v-show="!loadingShow">
    <hr class="separate">
      <a class="cube"
         :class="!item.link?'cube-inactive':''"
         :href="item.link"
         target="_blank"
         v-for="(item,index) in d.conf"
         :key="index">
        <font-awesome-icon :icon="getIcon(item.icon)"
                           fill="currentColor"
                           size="2x" />
        <p>{{item.text}}</p>
      </a>
    </div>
    <div class="copyright">{{d.copyright}}</div>
  </div>
</template>

<script>
import loading from "@/components/LoadingIndicator"; 
import TypedText from '@/components/TypedText.vue';
export default {
  components: { loading,TypedText },
  computed: {
    getIcon() {
      return d => [`${d.split(" ")[0]}`, `${d.split(" ")[1]}`];
    }
  },
  watch: {
    renderData: {
      handler(n) {
        this.d = n;
        this.loadingShow = false;
      },
      deep: true
    }
  },
  data() {
    return {
      d: {},
      loadingShow: true,
    };
  },
  props: {
    renderData: {
      type: Object
    }
  }
};

</script>

<style lang="less" scoped>
@import "../assets/theme/pure/core.less";
</style>
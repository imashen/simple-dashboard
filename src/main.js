import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // 导入品牌图标库
import { far } from '@fortawesome/free-regular-svg-icons';
import '@/assets/less/common.less';

// 将需要使用的图标库添加到全局库中
library.add(fas, far, fab);

// 创建应用实例
const app = createApp(App);

// 注册全局组件
app.component('font-awesome-icon', FontAwesomeIcon);

// 挂载应用
app.mount('#app');

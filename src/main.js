import { createApp } from 'vue';

import Framework7 from 'framework7/lite-bundle';

import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';
import 'framework7/framework7-bundle.min.css'; // 后续可优化在index.html中用link引入

Framework7.use(Framework7Vue);

import App from './App.vue';

const app = createApp(App);

// Register all Framework7 Vue components
registerComponents(app);

app.mount('#app');

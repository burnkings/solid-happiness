import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'; // 正确导入 element-plus 的样式

const app = createApp(App)

app.use(router)

app.mount('#app')

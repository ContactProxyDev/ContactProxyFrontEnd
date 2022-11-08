import { createApp } from 'vue'
import App from './modules/index/App.vue'
import { createVuestic } from 'vuestic-ui'
import router from './router/router'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import '../style.css'

createApp(App).use(createVuestic()).use(router).mount('#app')

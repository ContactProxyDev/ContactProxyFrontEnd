import { createApp } from 'vue'
import Auth from './Auth.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import '../../style.css'

createApp(Auth).use(createVuestic()).mount('#auth')
import { createApp } from 'vue'
import Registration from './Registration.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import 'material-design-icons-iconfont/dist/material-design-icons.min.css'

import '../../style.css'

createApp(Registration).use(createVuestic()).mount('#registration')

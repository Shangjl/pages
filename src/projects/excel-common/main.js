import {createApp} from 'vue'
import App from './App.vue'
import '@/global/styles/index.scss'

//import '@/global/global-js/windvane.js'

const app = createApp(App)
    .mount('#app')

export default app
import { createApp } from 'vue'
import adapter from 'webrtc-adapter';

console.log('adapter.browserDetails.version', adapter.browserDetails)
import App from './App.vue'
import '@/global/styles/index.scss'
import 'vant/es/toast/style';
const app = createApp(App)
  .mount('#app')

export default app
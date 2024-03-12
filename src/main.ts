import { createApp } from 'vue'
import App from './App.vue'
import Store from './store/store.d.ts'

createApp(App)
.use(Store)
.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
// import Store from './store/store.d.ts'
import { createPinia } from 'pinia'


const pinia = createPinia()

createApp(App)
.use(pinia)
.mount('#app')
// .use(Store)

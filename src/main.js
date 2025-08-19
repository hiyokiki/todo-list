import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createBootstrap} from 'bootstrap-vue-next/plugins/createBootstrap'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)

app.use(router)
app.use(createBootstrap()) // Important
app.mount('#app')

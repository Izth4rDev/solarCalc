import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import *as bootstrap from '../node_modules/bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


createApp(App).use(store).use(router).mount('#app')

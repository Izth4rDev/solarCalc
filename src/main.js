import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//import *as bootstrap from '../node_modules/bootstrap'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './scss/custom.scss';
//import "../src/scss/custom.css";

//import '../node_modules/sweetalert2/src/sweetalert2.scss'


createApp(App).use(store).use(router).mount('#app')

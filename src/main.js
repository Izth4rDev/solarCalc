import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './scss/custom.scss';

import SlotCalc from './components/slotCalc.vue';

const app = createApp(App);

app.component('slot-calc', SlotCalc);

app.use(store).use(router).mount('#app')


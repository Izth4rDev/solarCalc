import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import  ServiceView from '../views/ServicesView.vue';
import calcView from '../views/calcView.vue';
import calcView1 from '../components/calcView1.vue';
import calcView2 from '../components/calcView2.vue';
import calcView3 from '../components/calcView3.vue';
import calcViewResult from '../components/calcViewResult.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path:'/',
    name:'Login',
    component: LoginView
  },
  {
    path:'/register',
    name:'register',
    component:RegisterView
  },
  {
    path:'/service',
    name:'service',
    component:ServiceView
  },
  //Calculadora
  {
    path:'/calcView',
    name:'calcView',
    component:calcView,
    children:[
      {
        path:'',
        name:'calcView1',
        component:calcView1
      },
      {
        path:'/calcView2',
        name:'calcView2',
        component:calcView2
      },
      {
        path:'/calcView3',
        name:'calcView3',
        component:calcView3
      },
      {
        path:'/calcViewResult',
        name:'calcViewResult',
        component:calcViewResult
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

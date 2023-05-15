import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import  ServiceView from '../views/ServicesView.vue';
import  AdminView from '../views/AdmAgenda.vue';
import calcView from '../views/calcView.vue';
import calcView1 from '../components/calcView1.vue';
import calcView2 from '../components/calcView2.vue';
import calcView3 from '../components/calcView3.vue';
import calcViewResult from '../components/calcViewResult.vue';
import NosotrosView from '../views/AboutUs.vue';
import NotFound from '../views/NotFound.vue';


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
  {
    path:'/nosotros',
    name:'nosotros',
    component:NosotrosView
  },
  {
    path:'/administracion',
    name:'administracion',
    component:AdminView,
    beforeEnter: (to, from, next) => {
      //const user = auth.currentUser;// obtener el usuario actual de firebase
      //obtengo el usuario del localStorage 
      const usuario = JSON.parse(localStorage.getItem('usuario'));

      if (usuario === '') {
        // si no hay un usuario actual, redirigir a la página de inicio de sesión
        console.log('no hay usuario');
        next({ name: "Login" });
      } else if (usuario=== "administrador@a.com") {

        console.log('usuario administrador');
        // si el correo electrónico del usuario actual coincide con el correo del administrador permitir el acceso
        next();
      } else {
        // si el correo electrónico no coincide, redirigir a una página de acceso denegado
        console.log('correo no coincide')
        next({ name: "home" });
      }
    }
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
        path:'/calcView2/:nro', //paso de parametro por URL//
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
  { path: '/:catchAll(.*)', component: NotFound }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

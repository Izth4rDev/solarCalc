<template>
    <nav class="navbar bg-light navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid align-items-center">
        <a class="navbar-brand" href="#"> <img src="../assets/img/logoEmergeSolar.png" id="logo_img" alt="" @click="goHome"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/nosotros">Nosotros</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/service">Servicios</router-link>
            </li>
            <li v-if="userStorage ==='administrador@a.com'" class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/administracion">Administración</router-link>
            </li>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-colorPaleta1 text-colorPaleta3 fw-bold" @click="goToCalc">Calculadora</button>
            </div>
           
        </ul>
        
        <div class="d-flex justify-content-center" role="search">
            <span class="navbar-text me-3">
                {{ userStorage }}
            </span>
            <logout-modal></logout-modal>
        </div>
        </div>
    </div>
    </nav>

</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import logoutModal from '../components/LogoutButton.vue'
import router from '@/router';
export default{
    components:{
        logoutModal
    },
    computed:{
        ...mapState(['userStorage'])
    },
    methods:{
        ...mapMutations(['getUsuarioStorage']),
        ...mapActions(['extraer']),
        goHome(){
            router.push('/home');
        },
        goToCalc(){
        console.log('hola')
        router.push('/calcView')
        }
    },
    created(){
        this.getUsuarioStorage();
        this.extraer();
    }
}
</script>

<style scoped>
#logo_img{
    height: 100px;
    width: 100px;
}
.nav_item{
    font-family: 'Lato';
    font-weight: bold;
}
.nav_item:hover{
    border-bottom:solid #0DADFF 0.1rem;
}
</style>
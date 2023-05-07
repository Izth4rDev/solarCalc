<template>
    <nav class="navbar bg-light navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img src="../assets/img/logoEmergeSolar.png" id="logo_img" alt=""> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/home">Nosotros</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link nav_item mx-3" to="/home">Servicios</router-link>
            </li>
        </ul>
        <div class="d-flex justify-content-center" role="search">
            <span class="navbar-text me-3">
                {{ usuarioConectado }}
            </span>
            <logout-modal></logout-modal>
        </div>
        </div>
    </div>
    </nav>

</template>

<script>
import { mapState } from 'vuex';
import logoutModal from '../components/LogoutButton.vue'

export default{
    components:{
        logoutModal
    },
    computed:{
        ...mapState(['usuarioConectado'])
    },
    methods:{
        logout(){
            
        }
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
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Login">Login</router-link>
            </li>
        </ul>
        <form class="d-flex justify-content-center" role="search">
            <span class="navbar-text">
            usuario conectado
            </span>
            <logout-modal></logout-modal>
        </form>
        </div>
    </div>
    </nav>

</template>

<script>
import logoutModal from '../components/LogoutButton.vue'
export default{
    components:{
        logoutModal
    },
    methods:{
        logout(){
            
        }
    }
}
</script>
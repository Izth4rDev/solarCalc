<template>
    <header-view></header-view>
    <div>
        <img src="../assets/img/PaginaNoEncontrada.webp" alt="" class="img-fluid">
    </div>
    <footer-view></footer-view>
</template>

<script>
import headerView from '../components/HeaderComp.vue';
import footerView from '../components/FooterComp.vue';

export default{
    components:{
        headerView,
        footerView
    }
}
</script>
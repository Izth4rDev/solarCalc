<template>
    <header-view></header-view>
    <body-us></body-us>
    <footer-view></footer-view>
</template>

<script>
import headerView from '../components/HeaderComp.vue';
import footerView from '../components/FooterComp.vue';
import bodyUs from '../components/BodyAboutUs.vue';
    export default{
        components:{
            headerView,
            footerView,
            bodyUs
        }
    }
</script>


<style>

</style>
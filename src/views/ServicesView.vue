<template>
    <header-view></header-view>
    <body-service></body-service>
    <footer-view></footer-view>
</template>
<script>
import headerView from '../components/HeaderComp.vue';
import footerView from '../components/FooterComp.vue';
import bodyService from '../components/BodyService.vue';

export default{
    components: {
    headerView,
    bodyService,
    footerView
  }
}

</script>

<style>
</style>
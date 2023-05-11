<template>
    <header-view></header-view>
    <body-service></body-service>
    <footer-view></footer-view>
</template>
<script>
import headerView from '../components/HeaderComp.vue';
import footerView from '../components/FooterComp.vue';
import bodyService from '../components/BodyService.vue';
import { mapActions } from 'vuex';

export default{
    components: {
    headerView,
    bodyService,
    footerView
  },
  methods:{
    ...mapActions(['obtenerRegion'])
  },
  mounted(){
    this.obtenerRegion();
  }
}

</script>

<style>
</style>
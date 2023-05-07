<template>
  <header-view></header-view>
  <body-content></body-content>
  <footer-view></footer-view>
</template>

<script>
// @ is an alias to /src
import headerView from '../components/HeaderComp.vue';
import footerView from '../components/FooterComp.vue';
import bodyContent from '../components/BodyHomeComp.vue';

export default {
  name: 'HomeView',
  components: {
    headerView,
    bodyContent,
    footerView
  }
}
</script>

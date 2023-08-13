<template>
  <HeaderPage />
  <TopBanner />

  <HelloWorld class="center" />
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import HelloWorld from './components/HelloWorld.vue'
import TopBanner from './components/TopBanner.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderPage,
    FooterPage,
    TopBanner,
  },
}
</script>

<style>
a {
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}
</style>

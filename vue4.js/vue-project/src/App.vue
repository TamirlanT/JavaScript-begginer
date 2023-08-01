<template>
  <div id="app">
    <HeaderPage />
    <TopBanner />
    <MainContent />
    <FooterPage />
  </div>
</template>

<script>

import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import TopBanner from './components/TopBanner.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    TopBanner,
    MainContent,
    FooterPage,
  }
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

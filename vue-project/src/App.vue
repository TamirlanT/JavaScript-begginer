<template>
  <div id="app">
    <HeaderPage />
    <div class="banner">
      <img src="./assets/Photo.jpg" alt="banner">
    </div>
    <MainContent />
    <FooterPage />

  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
    MainContent
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
}

.center {
  padding-left: calc(50% - 570px);
  padding-right: calc(50% - 570px);
}
</style>

<template>
  <MainStyle />
  <HeaderPage />
  <router-view />
  <FooterPage />
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import MainStyle from './components/MainStyle.vue';
import FooterPage from './components/FooterPage.vue';




export default {
  name: 'App',
  components: {
    HeaderPage,
    MainStyle,
    FooterPage,
  },
  created() {
    this.$router.push({ name: 'Swiper' })

  }
}
</script>

<style></style>

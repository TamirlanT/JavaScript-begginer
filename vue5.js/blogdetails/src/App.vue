<template>
  <HeaderPage />
  <ProductDetails />
  <FooterPage />
</template>

<script>
import FooterPage from './components/FooterPage.vue';
import HeaderPage from './components/HeaderPage.vue';
import ProductDetails from './components/ProductDetails.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
    ProductDetails
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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

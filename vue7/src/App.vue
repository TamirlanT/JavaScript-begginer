<template>
  <HeaderComponent />
  <PropsStyle />
  <div class="banner"><img class="banner__img" src="./assets/banner.jpg" alt="mainBanner"></div>

  <div class="main">
    <div class="content center">
      <h2 class="header__content">
        {{ headerContent }}
      </h2>
      <p class="header__text">
        {{ paragraphOne }}
        <br>
        <br>
        {{ paragraphTwo }}
      </p>
    </div>
  </div>
  <SwiperProps />

  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import PropsStyle from './components/style.vue';
import SwiperProps from './components/Swiper.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',

  components: {
    HeaderComponent,
    FooterComponent,
    PropsStyle,
    SwiperProps
  },
  computed: {
    ...mapState(['headerContent', 'paragraphOne', 'paragraphTwo'])
  }
}
</script>

<style>
.banner {
  padding-bottom: 40px;
  width: 100%;
  flex-shrink: 0;
}

.banner__img {
  width: 100%;
}

.main {
  display: flex;
  justify-content: center;
}

.content {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
  width: 638px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: 11px;
  padding-bottom: 100px;
}

.header__content {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 62.5px */
  letter-spacing: 1px;
}

.header__text {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}
</style>

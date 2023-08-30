<template>
    <div>
        <div class="banner"><img class="banner__img" src="../assets/banner.jpg" alt="SwiperBanner"></div>

        <div class="main">
            <div class="content center">
                <h2 class="header__content">
                    Minimal Look Bedrooms
                </h2>
                <p class="header__text">
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.
                    Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at
                    nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.`
                    <br>
                    <br>
                    ` In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc,
                    mattis quis nibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae,
                    elequis convallis elit, in viverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt
                    ligula id purus porttitor.`
                </p>
            </div>
        </div>
        <swiper :style="{
            '--swiper-navigation-color': 'rgb(188, 44, 188)',
            '--swiper-pagination-color': 'rgb(188, 44, 188)',
        }" :zoom="true" :navigation="true" :pagination="{
    clickable: true,
}" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="../assets/content.png" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="../assets/content.png" />
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="../assets/content.png" />
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
    name: 'SwiperSeven',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Zoom, Navigation, Pagination],
        };
    },
};
</script>

<style scoped>
#app {
    height: 100%
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

body {
    background: #000;
}

.swiper {
    width: 100%;
    height: 100%;

}

.swiper-slide {
    overflow: hidden;

}

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
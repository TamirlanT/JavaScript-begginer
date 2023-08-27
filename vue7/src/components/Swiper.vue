<template>
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
    name: 'SwiperProps',
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
</style>
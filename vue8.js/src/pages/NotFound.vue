<template>
    <div class="error__page center">
        <div class="error">
            <p class="error_number">404</p>
            <p class="error__text">We are sorry, but the page
                you requested was not found</p>
            <router-link to="/"><button class="error__button">Back to Home</button></router-link>

        </div>
        <div>
            <img class="error__img" src="../assets/error_img.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.error__page {
    display: flex;
    gap: 81px;
    align-items: center;
}

.error {
    display: flex;
    width: 1563px;
    align-items: flex-start;
    flex-direction: column;
}

.error_number {
    color: #CDA274;
    font-family: DM Serif Display;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 312.5px */
}

.error__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 52.5px */
    letter-spacing: 0.35px;
    padding-bottom: 23px;
}

.error__button {
    border-radius: 18px;
    background: #292F36;
    box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);

    display: flex;
    padding: 26px 54px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #FFF;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}

.error__img {
    border-radius: 0px 0px 0px 353px;
    background: #EBEBEB;
}
</style>
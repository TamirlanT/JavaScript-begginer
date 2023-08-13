<template>
    <div class="projects center">
        <div class="product" v-for="project in projectList" :key="project.id">
            <div class="product__image">
                <div>
                    <img :src="project.image" alt="alt">
                </div>
                <div class="button__box">
                    <button class="like__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
                            <g filter="url(#filter0_d_993_156)">
                                <path @click="project.isActive = !project.isActive" :class="{ red: project.isActive }"
                                    d="M16.0992 1.80951C16.7004 -0.0279021 19.2996 -0.0279021 19.9008 1.80951L21.7983 7.60879C22.0673 8.43084 22.8342 8.98685 23.6992 8.98685H29.8097C31.7506 8.98685 32.5539 11.4732 30.98 12.6088L26.0604 16.1581C25.3546 16.6674 25.0591 17.5748 25.3298 18.402L27.2146 24.1623C27.8166 26.0025 25.7137 27.539 24.1435 26.4062L19.1702 22.818C18.4715 22.3139 17.5285 22.3139 16.8298 22.818L11.8565 26.4062C10.2863 27.539 8.18335 26.0025 8.78545 24.1623L10.6702 18.402C10.9409 17.5748 10.6454 16.6674 9.93955 16.1581L5.02004 12.6088C3.44611 11.4732 4.24942 8.98685 6.19025 8.98685H12.3008C13.1658 8.98685 13.9327 8.43084 14.2017 7.60879L16.0992 1.80951Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_d_993_156" x="0.186424" y="0.431396" width="35.6271" height="34.3619"
                                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_993_156"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="product__footer">
                <div class="product__desc">
                    <h2 class="product__title">{{ project.title }}</h2>
                    <p class="product__text">{{ project.text }}</p>
                </div>
                <div class="product__button">
                    <button class="product__button"><img src="../assets/buttonRight.svg" alt="s"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BadRoom',

    data() {
        return {
            projectList:
                [{
                    image: require("@/assets/product1.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 1,
                    isActive: false,
                }, {
                    image: require("@/assets/product2.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 2,
                    isActive: true,
                }, {
                    image: require("@/assets/product3.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 3,
                    isActive: false,
                }, {
                    image: require("@/assets/product1.jpg"),
                    title: 'Minimal Bathroom',
                    text: 'Decor / Arc',
                    id: 4,
                    isActive: false
                }
                ],
        };

    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.red {
    fill: #FFA928;
}

.projects {
    display: grid;
    grid-template-columns: repeat(2, 548px);
    row-gap: 54px;
    column-gap: 107px;
}

.product {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    width: 585px;
    height: auto;
    box-sizing: content-box;
}

.product__image {
    position: relative;
    box-sizing: border-box;

}

.product__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
}

.button__box {
    position: absolute;
    top: 0%;
    right: 0%;
    display: flex;
}

.like__button {
    border: none;
    background-color: transparent;
}


.white {

    fill: #FFA928;
}
</style>
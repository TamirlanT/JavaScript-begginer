<template>
    <div>
        <div>
            <div class="header center">
                <div class="header__logo">
                    <router-link to="/swiper" class="logo__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                    </router-link>
                    <p class="header__text">Interno</p>
                </div>
                <nav class="header__links">
                    <router-link class="header__link" to="/swiper">Swiper</router-link>
                    <router-link class="header__link" to="/projects">Projects</router-link>
                    <router-link class="header__link" to="/change">Changer</router-link>
                    <router-link class="header__link" to="/404">Error</router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',

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

<style scoped></style>
<template>
    <div>
        <div class="footer center">
            <div class="footer__inferno">
                <div class="footer__logo">
                    <router-link to="/" class="logo__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                    </router-link>
                    <p class="footer__img">Interno</p>
                </div>
                <p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>
                <div class="footer__icon">
                    <img src="../assets/twitter__logo.svg" alt="twitter_logo">
                    <img src="../assets/In.svg" alt="in__logo">
                </div>
            </div>
            <div class="footer__pages">
                <h2 class="pages__title">Pages</h2>
                <nav class="pages__links">
                    <router-link class="pages__link" to="/">Home </router-link>
                    <router-link class="pages__link" to="/404">Project </router-link>
                    <router-link class="pages__link" to="/404">Blog </router-link>
                </nav>
            </div>
            <div class="services"></div>
            <div class="footer__contacts">
                <p class="contacts__title">Contacts</p>
                <div class="contacts__text">
                    <p class="contacts__text">55 East Birchwood Ave. Brooklyn, New York 11201</p>
                    <p class="contacts__text">contact@interno.com</p>
                    <p class="contacts__text">(123) 456 - 7890</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterPage',

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
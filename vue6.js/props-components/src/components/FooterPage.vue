<template>
    <div>
        <div class="footer center">
            <div class="footer__inferno">
                <div class="footer__logo">
                    <a href="#" class="logo__link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                                fill="#CDA274" />
                        </svg>
                    </a>
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
                <div class="pages__links">
                    <a class="pages__link" href="#">Home</a>
                    <a class="pages__link" href="#">Project</a>
                    <a class="pages__link" href="#">Blog</a>
                </div>
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
};
</script>

<style scoped>
.footer {
    padding-top: 96px;
    padding-bottom: 134px;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 82px;
}

.footer__logo {
    display: flex;
    gap: 8px;
    align-items: baseline;
}

.footer__img {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 50px */
    padding-bottom: 18px;
}

.footer__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
    padding-bottom: 31px;
}

.footer__icon {
    display: flex;
    gap: 54px;
}

.footer__inferno {
    width: 393px;
}

.footer__pages {
    width: 125px;
}

.pages__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    padding-bottom: 9px;
}

.pages__links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 31px;
}

.pages__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 300%;
    /* 66px */
    letter-spacing: 0.22px;
}

.contacts__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    padding-bottom: 26px;
}

.services {
    width: 120px;
}

.contacts__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;

    width: 258px;

    display: flex;
    gap: 20px;
    flex-wrap: wrap
}
</style>
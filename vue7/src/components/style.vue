<script>
export default {
    name: 'PropsStyle',

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

<style>
* {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - 570px);
    padding-right: calc(50% - 570px);

}

.header {
    padding-top: 53px;
    padding-bottom: 57px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__logo {
    display: flex;
    gap: 8px;
    align-items: center;
}

.header__text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 50px */
}

.header__links {
    display: flex;
    gap: 32px;

}

.header__link {
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 25px */
    ;
}

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

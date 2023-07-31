<template>
    <div>
        <div class="content center">
            <component :is="changeTabs"></component>


            <div class="tags">
                <h2 class="tag__title">Tags</h2>
                <div class="tag__buttons">
                    <button class="tag__button" @click="currentTab = nameButton" v-for="nameButton in nameButtons"
                        :key="nameButton.id">
                        {{ nameButton }}
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainContent',

    data: {
        nameButtons: ['kitchen', 'badroom', 'building', 'Architecture', 'Kitchen-Planning', 'Bathroom'],
        currentTab: 'kitchen',
    },
    computed: {
        changeTabs() {
            return `change-${this.currentTab}`
        }
    }
};
</script>

<style lang="css" scoped>
.tag__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
    padding-bottom: 24px;

}

.tag__buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

}

.tag__button {
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #F4F0EC;

    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 22.5px */
    letter-spacing: 0.36px;
}


.content {

    /* position: relative; */
    display: grid;
    grid-template-columns: 799px 346px;
    gap: 52px;
    flex-direction: column;
    padding-top: 200px;
}

.content__title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 62.5px */
    letter-spacing: 1px;
    padding-bottom: 11px;
}

.content__image {
    padding-bottom: 26px;
    border-radius: 50px;
    background: #C4C4C4;
    background-repeat: no-repeat;
    background-size: cover;
    width: 799px;
    height: 539px;
    flex-shrink: 0;
}

.change__kitchen {
    background-image: url(img/kitchen__project1.png);

}

.change__badroom {
    background-image: url(img/badroom_project2.png);

}

.change__building {
    background-image: url(img/project_3.png);

}

.change__Architecture {
    background-image: url(img/project_4.png);
}

.change__KitchenPlanning {
    background-image: url(img/project_5.png);
}

.change__bathroom {
    background-image: url(img/project_6.png);
}

.content__info {
    display: flex;
    justify-content: space-between;
    padding-top: 46px;
}

.content__date {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.content__link {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;

}

.content__link:not(:last-child):after {
    content: '  /';
}

.content__decription {
    margin-top: 48px;
}

.content__text {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;

}</style>
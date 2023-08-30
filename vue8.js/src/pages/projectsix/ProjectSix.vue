<template>
    <div class="center">
        <div class="banner">
            <img src="../../assets/projectssix/Banner.jpg" alt="Projects banner">
            <div class="banner__box ">
                <h2 class="banner__title">Our Project</h2>
                <nav class="banner__links">
                    <router-link to="/">Home</router-link>
                    <router-link to="/404">Project</router-link>
                </nav>
            </div>
        </div>
        <div class="tags center">
            <button class="tag__buttons" v-for="button in buttons" :key="button.id" @click="currentTab = button">
                {{ button }}
            </button>
        </div>
        <component :is="changeTabs"></component>
    </div>
</template>

<script>
import Bathroom from './TagBathroom.vue';
import Badroom from './TagBadroom.vue'
export default {
    name: 'ProjectSix',
    components: {
        Bathroom,
        Badroom
    },

    data() {
        return {
            buttons: ['Bathroom', 'Badroom'],
            currentTab: 'Bathroom'
        };
    },
    computed: {
        changeTabs() {
            return `${this.currentTab}`;
        }
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.banner {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100%;

}

.banner__box {
    position: absolute;
    margin: auto;
    display: flex;
    width: 504px;
    padding: 41px 125px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    display: flex;
    width: 254px;
    flex-direction: column;
    align-items: center;

    bottom: 0%;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
}

.tags {
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-top: 200px;
}

.tag__buttons {
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
</style>
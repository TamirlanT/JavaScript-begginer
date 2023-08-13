<template>
    <div class="banner">
        <img src="../assets/Banner.jpg" alt="banner">
        <div class="banner__box ">
            <h2 class="banner__title">Our Project</h2>
            <div class="banner__links">
                <a href="#" class="banner__link">Home / </a>
                <a href="#" class="banner__link">Project</a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'TopBanner',
}
</script>
<style scoped>
.banner {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;

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
</style>
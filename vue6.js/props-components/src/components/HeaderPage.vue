<template>
    <div>
        <div class="header center">
            <div class="header__logo">
                <a href="#" class="logo__link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                        <path
                            d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                            fill="#CDA274" />
                    </svg>
                </a>
                <p class="header__text">Interno</p>
            </div>
            <div class="header__links">
                <a href="#" class="header__link">Home</a>
                <a href="#" class="header__link">Project</a>
                <a href="#" class="header__link">Block</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
};
</script>
    
<style lang="css" scoped>
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
</style>
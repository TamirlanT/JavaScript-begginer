<template>
    <div class="product">
        <div class="product__details center">
            <h2 class="product__title">{{ product.name }}</h2>
            <div>
                <img class="product__img" src='../assets/product_1.png' alt="Product image">

            </div>
            <p class="product__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus itaque rerum sed
                natus,
                culpa maiores eaque
                cumque atque explicabo. Quas sunt delectus voluptas ab dignissimos?</p>
            <p class="product__price">{{ formattedPrice }}</p>
            <div v-if="product.available">
                <p class="product__status">Available</p>
            </div>
            <div v-else>
                <p style="color:red">Out Of Stock</p>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {
                name: 'Produt one',
                price: 99,
                available: true,
            }
        };
    },
    methods: {

    },
    computed: {
        formattedPrice: function () {
            return `Price: $${this.product.price}`
        }
    }
};
</script>

<style scoped>
.product {
    display: flex;
    justify-content: center;
}

.product__details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 426px;

}

.product__tittle {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    /* 31.25px */
    letter-spacing: 0.5px;
}

.product__img {
    border-radius: 5%;
}

.product__desc {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 33px */
    letter-spacing: 0.22px;
}

.product__price {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
    color: #f58ebc;
}

.product__status {
    text-decoration: underline;
    color: green
}
</style>
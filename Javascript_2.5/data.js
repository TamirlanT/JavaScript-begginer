const dataProducts = fetch('https://dummyjson.com/products?limit=10&select=title,price,images')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });


const dataProd = [
    {
        id: 1,
        title: 'iPhone 9',
        price: 549,
        images: 'https://i.dummyjson.com/data/products/1/4.jpg'
    },
    {
        id: 2,
        title: 'iPhone X',
        price: 899,
        images: 'https://i.dummyjson.com/data/products/2/1.jpg'
    },
    {
        id: 3,
        title: 'Samsung Universe 9',
        price: 1249,
        images: 'https://i.dummyjson.com/data/products/3/1.jpg'
    }
]
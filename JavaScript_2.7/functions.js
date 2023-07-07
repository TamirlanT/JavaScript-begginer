const dataProds = JSON.parse(dataProducts);

dataProds.forEach(element => {

    //  START ->Создание карты товара

    const prodElems = document.querySelector('.products')

    const prodCard = document.createElement('div')
    prodCard.classList.add('product__card')

    const prodImgBox = document.createElement('a')
    prodImgBox.classList.add('product__imgbox')

    const prodImg = document.createElement('img')
    prodImg.classList.add('content__img')
    prodImg.src = `${element.img}`
    prodImg.alt = 'content__img'

    const prodLink = document.createElement('a')
    prodLink.classList.add('prod__link')
    prodLink.href = '#'
    const prodTitle = document.createElement('p');
    prodTitle.classList.add('product__title')
    prodTitle.textContent = `${element.link}`

    const prodDesc = document.createElement('p')
    prodDesc.classList.add('product__description')
    prodDesc.textContent = `${element.description}`

    const prodPrice = document.createElement('p')
    prodPrice.classList.add('product__price')
    prodPrice.textContent = `$ ${element.price}`


    // add elems
    prodImgBox.appendChild(prodImg)
    prodLink.appendChild(prodTitle)
    prodCard.appendChild(prodImgBox)
    prodCard.appendChild(prodLink)
    prodCard.appendChild(prodDesc)
    prodCard.appendChild(prodPrice)
    prodElems.appendChild(prodCard)

    // END ->Создание карты товара


    //START -> Cоздание ховера и добавление в основной блок продукта

    const hoverEl = document.createElement('div');
    hoverEl.classList.add('hover__box')

    const hoverBtn = document.createElement('button');
    hoverBtn.id = element.id;
    hoverBtn.classList.add('hover__btn');
    hoverBtn.src = `C:/Users/Тамирлан/Desktop/jsLast/test/img/kolyska.svg`
    hoverBtn.textContent = 'Add to cart';

    const clickCounter = document.createElement('span');
    clickCounter.classList.add('show__click');
    clickCounter.textContent = 0;

    hoverEl.appendChild(hoverBtn);
    prodImgBox.appendChild(hoverEl);
    hoverEl.appendChild(clickCounter);

    // END -> Cоздание ховера и добавление в основной блок продукта  


});


// START -> Создание блока Cart__items

const buttonEl = document.querySelector('.hover__btn')
let cartItems = document.querySelector('.cart__items');
let titleItems;
const prod = document.querySelector('.products')

const contentEl = document.querySelector('.content');
let cartContentEl = document.querySelector('.cart__contents');
let allBtnClicker = 0;

prod.addEventListener('click', function (e) {

    if (e.target.className != 'hover__btn') { return }
    else {
        if (allBtnClicker == 0 && e.target.className == 'hover__btn') {
            allBtnClicker++;

            cartItems = document.createElement('div');
            cartItems.classList.add('cart__items');
            titleItems = document.createElement('h2');
            titleItems.classList.add('cart__title');
            titleItems.textContent = 'Cart Items';
            cartItems.appendChild(titleItems);
            contentEl.appendChild(cartItems);
        }
    }
}
);

// END -> Создание блока Cart__items

// START - > добавление блока с картой товара

prod.addEventListener('click', function (e) {
    let target = e.target;
    if (target.className != 'hover__btn') { return }

    if (cartContentEl == null) {
        cartContentEl = document.createElement('div');
        cartContentEl.classList.add('cart__contents');
        cartItems.appendChild(cartContentEl);
    }
});


// END - > добавление блока с картой товара


const dataProd = JSON.parse(dataProducts);

const productElement = document.querySelector('.products');
const allButtons = document.querySelectorAll('button');
let contentProdEl = document.querySelector('.content__product');
let cartImageBox,
    cartImage,
    cartProdInfo,
    cartTitle,
    cartPrice,
    cartColor,
    cartSize,
    cartQuantity,
    cartDeleteBtn;
let x;

const handlDel = () => { return 0 } // Обнуление счетчика карты товара
const handlClick = (number) => { return number += 1 } // Увеличение счетчика товара


productElement.addEventListener('click', function (e) {

    let target = e.target;
    let count;

    if (target.className == 'hover__btn') {
        span = target.closest('.hover__box').querySelector('span');
        spanNumber = Number(span.textContent)
        let el = handlClick(spanNumber)
        count = el;
        span.textContent = count
    }
    let productId = target.id
    let productBox;

    // Запись объекта(одного продукта) для дальнейшей работы

    for (let i = 0; i < dataProd.length; i++) {
        if (productId == dataProd[i].id) {
            productBox = dataProd[i];
            // console.log(productBox);
            // console.log(count);
            // console.log(productBox.id);
        }
    }

    if (count == 1 && target.className == 'hover__btn' && productId == productBox.id) {
        cartItems.style.display = 'block';

        contentProdEl = document.createElement('div');
        contentProdEl.classList.add('content__product');
        contentProdEl.id = productId;

        cartImageBox = document.createElement('div');
        cartImageBox.classList.add('img__box');

        cartImage = document.createElement('img');
        cartImage.src = productBox.img;
        cartImage.classList.add('prod_img')

        cartImageBox.appendChild(cartImage);
        contentProdEl.appendChild(cartImageBox);

        cartContentEl.appendChild(contentProdEl);

        cartProdInfo = document.createElement('div');
        cartProdInfo.classList.add('cart__info');

        cartTitle = document.createElement('p');
        cartTitle.textContent = productBox.link;
        cartTitle.classList.add('cart__title');


        cartPrice = document.createElement('p');
        cartPrice.textContent = `Price: $${productBox.price}`;
        cartPrice.classList.add('cart__price');

        cartColor = document.createElement('p');
        cartColor.textContent = `Color: ${productBox.color} `;
        cartColor.classList.add('cart__color');

        cartSize = document.createElement('p');
        cartSize.textContent = `Size: ${productBox.size} `;
        cartSize.classList.add('cart__size');

        cartQuantity = document.createElement('p');
        cartQuantity.textContent = `Quantity: ${count} `
        cartQuantity.classList.add('cart__quantity');

        // Сбор карты товара START
        cartContentEl.appendChild(contentProdEl);

        contentProdEl.appendChild(cartImageBox);
        contentProdEl.appendChild(cartProdInfo);
        cartImageBox.appendChild(cartImage);

        // Cart__info
        cartProdInfo.appendChild(cartTitle);
        cartProdInfo.appendChild(cartPrice);
        cartProdInfo.appendChild(cartColor);
        cartProdInfo.appendChild(cartSize);
        cartProdInfo.appendChild(cartQuantity);

        // cart__delete
        cartDeleteBtn = document.createElement('button');
        cartDeleteBtn.classList.add('cart__delete');
        cartDeleteBtn.id = target.id
        contentProdEl.appendChild(cartDeleteBtn);

        console.log(`--------> Первое вхождение в цикл${count}`);

    } else {
        const x = document.querySelectorAll('.content__product')
        console.log(x);
        let parentElem;

        for (let i = 0; i < x.length; i++) {
            if (productId == x[i].id) {
                parentElem = x[i];
                let childQuantity = parentElem.querySelector('.cart__quantity');
                childQuantity.textContent = `Quantity: ${count}`;
                let childPrice = parentElem.querySelector('.cart__price');
                childPrice.textContent = `Price: ${productBox.price * count}`
                // console.log(parentElem);
            }
        }
    }

    const deleteProduct = document.querySelectorAll('.cart__delete');
    for (let i = 0; i < deleteProduct.length; i++) {
        if (productId == deleteProduct[i].id) {
            x = deleteProduct[i];
            // console.log(x);

            x.addEventListener('click', function (e) {
                let target = e.target;
                console.log(target.closest('div'));
                console.log(target.id);
                target.closest('div').remove();
                let spanDel = productElement.querySelectorAll('button')
                let spanEl;
                for (let i = 0; i < spanDel.length; i++) {
                    if (target.id == spanDel[i].id) {
                        spanEl = spanDel[i]
                        let span = spanEl.closest('.hover__box').querySelector('span')
                        span.textContent = handlDel();
                    }
                }
                if (cartContentEl.children.length < 1) {
                    cartItems.style.display = 'none';
                }
            })
        }
    };
});

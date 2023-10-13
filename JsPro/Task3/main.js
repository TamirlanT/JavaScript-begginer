// 
// Кнопка "Добавить отзыв",
// которая сохраняет отзыв о продукте в LocalStorage.

const saveBtn = document.querySelector('.save__btn')
const product = document.querySelector('.product__textarea')
const userComment = document.querySelector('.comment__textarea')

// Добавление функции сохранения
saveBtn.addEventListener('click', () => {

    console.log(product.value)
    console.log(userComment.value)

    let key = (product.value)
    let value = []
    value.push(userComment.value)

    if (localStorage.getItem(key) == null) {

        localStorage.setItem(key, value)
    } else {
        console.log(localStorage.getItem(key).split(','));
        const values = localStorage.getItem(key).split(',')
        values.push(value)
        console.log(values);

        localStorage.setItem(key, values)
        // value.push(userComment.value)
        // localStorage.setItem(key, value)
    }

    product.value = ''
    userComment.value = ''
});

// Функция очистки LocalStorage

const clear = document.querySelector('.clear__btn')

clear.addEventListener('click', function () {
    // body
    localStorage.clear()
});
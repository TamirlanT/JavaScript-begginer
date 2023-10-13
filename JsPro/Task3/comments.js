// Показывает список всех продуктов, о которых были оставлены отзывы.

const ulElem = document.querySelector('.product__list')

for (let i = 0; i < localStorage.length; i++) {

    // Создание html элементов
    const detailsliElem = document.createElement('details')
    const summaryElem = document.createElement('summary')
    const divElem = document.createElement('div')


    // Создание 'матрёшки'
    detailsliElem.appendChild(divElem)
    detailsliElem.appendChild(summaryElem)
    ulElem.appendChild(detailsliElem)


    // Наполнение 'Матрешки'
    summaryElem.textContent = localStorage.key(i)

    const localkey = summaryElem.textContent
    const array = localStorage.getItem(localkey).split(',')

    for (let j = 0; j < array.length; j++) {
        let delButton = document.createElement('button')
        delButton.classList.add('delete__button')

        const paragElem = document.createElement('p');
        paragElem.textContent = array[j]

        divElem.appendChild(paragElem)
        divElem.appendChild(delButton)
    }
}




// При клике на название продукта отображается список всех отзывов
// по этому продукту.

const delComment = document.querySelectorAll('.delete__button')

delComment.forEach(element => {
    element.addEventListener('click', function (e) {

        let target = e.target
        let keyToDeleteComment = target.closest('details').lastChild.textContent
        let valCommentToDelete = target.previousSibling.textContent

        let keysInLocalStorage = localStorage
            .getItem(keyToDeleteComment)
            .split(',')

        for (key in keysInLocalStorage) {
            if (valCommentToDelete == keysInLocalStorage[key]) {
                keysInLocalStorage.splice(key, 1)
                localStorage.setItem(keyToDeleteComment,
                    keysInLocalStorage)
            }
        }



        let arrayOfComments = localStorage.getItem(keyToDeleteComment)
        if (arrayOfComments == ['']) {
            let u = target.parentNode.parentNode
            u.remove()
            localStorage.removeItem(keyToDeleteComment)
        } else {
            target.previousSibling.remove()
            target.remove()
        }
    });
});


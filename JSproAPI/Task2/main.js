/*
Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

Контейнер для отображения текущего изображения.
Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
Навигационные точки (индикаторы) для быстрого переключения между изображениями.
Используйте HTML для создания элементов интерфейса.

Используйте JavaScript для обработки событий:

При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.
Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.*/

const images = document.querySelectorAll('.image')
const imgBox = document.querySelector('.sliderBox')
const btnColor = 'purple'

const imgArr = imgBox.children


const previos = document.querySelector('.image__previous')

// Обработчик клавиши "Назад"
previos.addEventListener('click', () => {
    let index = 0;
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].classList.contains('active')) {
            index = i
            imgArr[i].classList.remove('active')
            index -= 1;
        }
    }
    if (index !== -1) {
        imgArr[index].classList.add('active')
    } else {
        let newIndex = imgArr.length - 1
        index = newIndex;
        imgArr[index].classList.add('active')
    }

});

const next = document.querySelector('.image__next')

//Обработка клавиши "Вперёд"
next.addEventListener('click', () => {
    let index = 0
    for (let i = 0; i < imgArr.length; i++) {
        if (imgArr[i].classList.contains('active')) {
            index = i
            imgArr[i].classList.remove('active')
            index += 1;
        }
    }
    if (index < imgArr.length) {
        imgArr[index].classList.add('active')
    } else {
        index = 0;
        imgArr[index].classList.add('active')
    }
});


const ulElem = document.querySelector('.pagination__list')

const imageSrc = document.querySelectorAll('img')

// Создание пагинации под блоком с изображениями
for (let i = 0; i < imgArr.length; i++) {
    const btnPaginationElem = document.createElement('button')
    btnPaginationElem.textContent = `${i + 1}`
    btnPaginationElem.classList.add('pagination__btn')
    ulElem.append(btnPaginationElem)

}

const btnPagination = document.querySelectorAll('.pagination__btn')

// Обработчик действий на пагинацию
btnPagination.forEach(el => {
    el.addEventListener('click', (e) => {
        const target = e.target
        const key = target.textContent
        const activeImg = imgArr[key - 1]

        for (let img of imgArr) {
            if (img.classList.contains('active')) {
                img.classList.remove('active')
            }
        }

        if (!activeImg.classList.contains('active')) {
            activeImg.classList.add('active')
        }

    });

});

const changeImgButtons = document.querySelectorAll('button')

// Обработчик событий по изменению и выделению активного изображения
changeImgButtons.forEach(el => {
    el.addEventListener('click', function (e) {
        // body
        for (let i = 0; i < imgArr.length; i++) {
            if (imgArr[i].classList.contains('active')) {
                btnPagination[i].style.backgroundColor = btnColor
            } else {
                btnPagination[i].style.backgroundColor = '#11ffee00'
            }
        }
    });
});

// Изменение цвета при запуске страницы
for (let i = 0; i < imgArr.length; i++) {
    if (imgArr[i].classList.contains('active')) {
        btnPagination[i].style.backgroundColor = btnColor
    }
}
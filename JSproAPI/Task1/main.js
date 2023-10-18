// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.
// Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// При разработке используйте Bootstrap для стилизации элементов.


// parse JSON данных

const lessonData = JSON.parse(lessonsData)
const box = document.querySelector('.lessons')

// создание формы по полученным урокам
lessonData.forEach(element => {
    const divElem = document.createElement('div')
    divElem.classList.add('lesson__box')

    const lessonName = document.createElement('h2')
    lessonName.classList.add('lesson__name')

    const lessonTime = document.createElement('p')
    lessonTime.classList.add('lesson__time')

    const lessonMaxPerson = document.createElement('p')
    lessonMaxPerson.classList.add('lesson__persons')

    const currentSignUpPersons = document.createElement('p')
    currentSignUpPersons.classList.add('lesson__curentPersons')


    const signUpBtn = document.createElement('button')
    signUpBtn.classList.add('lesson__signUp')
    signUpBtn.textContent = 'sign up'

    const cancelSignUp = document.createElement('button')
    cancelSignUp.classList.add('lesson__cancel')
    cancelSignUp.textContent = 'Cancel Sign Up'

    lessonName.textContent = element.name
    lessonTime.textContent = element.time
    lessonMaxPerson.textContent = element.maxPersons



    divElem.append(lessonName, lessonTime,
        lessonMaxPerson, currentSignUpPersons,
        signUpBtn, cancelSignUp)

    box.append(divElem)
});

const keyName = document.querySelectorAll('.lesson__name')
const keys = []

const maxPersons = document.querySelectorAll('.lesson__persons')
const person = []

// for (pers of maxPersons) {
//     person.push(pers.textContent)
// }

// for (let i of keyName) {
//     keys.push(i.textContent);
// }

// Проверка на наличие ключа:значения если нет запись с нулевым значением
for (let key of keys) {
    if (localStorage.getItem(key) == null || localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, 0)
    }
}

const signUp = document.querySelectorAll('.lesson__signUp')

// Отображение количества записей на странице
signUp.forEach(el => {
    const person = el.previousSibling
    const parrentNode = el.closest('div')
    const key = parrentNode.firstChild
    person.textContent = localStorage.getItem(key.textContent)
});

// выключение кнопки при максимальной заполненности
signUp.forEach(el => {
    el.disabled = false

    const parrentNode = el.closest('div')

    const key = parrentNode.firstChild

    const maxPerson = el.previousSibling.previousSibling

    if (localStorage.getItem(key.textContent) >=
        parseInt(maxPerson.textContent)) {
        el.disabled = true
    }
});

// Настройка клика
signUp.forEach(el => {
    el.addEventListener('click', (e) => {
        // body
        const target = e.target

        const parrentNode = target.closest('div')

        const key = parrentNode.firstChild.textContent

        let currentPerson = parseInt(localStorage.getItem(key))
        currentPerson += 1

        localStorage.setItem(key, currentPerson)

        const signUpPersons = target.previousSibling

        signUpPersons.textContent = currentPerson
        // Выключение при достижении максимума
        if (currentPerson >= signUpPersons.previousSibling.textContent) {
            target.disabled = true
        }
        // Переключение отмены записей если значение становиться больше 0
        if (currentPerson == 1) {
            const cancelSignUp = el.nextSibling
            cancelSignUp.disabled = false
        }

    });
});

const cancelSignUp = document.querySelectorAll('.lesson__cancel')
// настройка отмены записи
cancelSignUp.forEach(el => {
    el.addEventListener('click', (e) => {
        el.disabled = false
        const target = e.target

        const parrentNode = target.closest('div')

        const key = parrentNode.firstChild

        let val = localStorage.getItem(key.textContent)

        val -= 1

        localStorage.setItem(key.textContent, val)

        const content = target.previousSibling.previousSibling

        content.textContent = val
        // блокировка клавиши при количестве участников = 0
        if (val == 0) {
            el.disabled = true
        }

        const maxPerson = el.previousSibling.previousSibling.previousSibling
        // переключение клавиши регистрации
        if (localStorage.getItem(key.textContent) < maxPerson) {
            const signUpBtn = el.previousSibling
            signUpBtn.disabled = false

        }
    });
});

// отключение клавиши отмены при 0 участников
cancelSignUp.forEach(el => {
    const parrentNode = el.closest('div')

    const key = parrentNode.firstChild

    if (localStorage.getItem(key.textContent) == 0) {
        el.disabled = true
    }

});


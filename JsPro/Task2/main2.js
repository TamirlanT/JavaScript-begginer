/*Вы разрабатываете систему отзывов для вашего веб-сайта.
 Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие
  или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для
 отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
 Однако если длина введенного отзыва менее 50 или более 500 символов,
  функция должна генерировать исключение.

При добавлении отзыва,
 он должен отображаться на странице под предыдущими отзывами, а не заменять их.
  */

const btn = document.querySelector('.submit__btn')
const form = document.querySelector('.form__textarea')
const comments = document.querySelector('.user__comments')

console.log(btn);
console.log(form);
let countId = 1;

btn.addEventListener('click', () => {
    // body
    let paragraph = document.createElement('p')
    paragraph.textContent = form.value

    let userId = document.createElement('h3')
    let commentBox = document.createElement('div')

    if (paragraph.textContent.length > 50 &&
        paragraph.textContent.length < 500) {

        userId.textContent = `user_${countId}`
        countId += 1

        commentBox.appendChild(userId)
        commentBox.appendChild(paragraph)

        comments.append(commentBox)
    } else {
        alert
            ('Ваш отзыв должен быть не меньше 50 и небольше 500 символов')
    }

    // comments.append(paragraph)
});


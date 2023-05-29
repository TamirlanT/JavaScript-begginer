// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const count = 10
for (let i = 0; i <= count; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`)
    } else if (i % 2 != 0) {
        console.log(`${i} - нечетное число`)
    } else {
        console.log(`${i} - четное число`)
    }

}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7]
const newArray = []
for (let i = 0; i < array.length; i++) {
    if (array[i] != 4 && array[i] != 5) {
        newArray.push(array[i])
    }
}
console.log(newArray)


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const arr = []
for (let i = 0; i <= 5; i++) {
    arr[i] = getRandomInt(10) //Генерация массива
}

console.log(arr) // Массив

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] // Сумма массива
}
console.log(sum)


let minNumber = arr[0] // доп. переменная для хранения наименьшего значения
for (let i = 0; i < arr.length; i++) {
    if (minNumber > arr[i]) {
        minNumber = arr[i]
    }
}
console.log(minNumber);
// console.log(arr.indexOf(3));
console.log(arr.indexOf(3) != -1 ? 'Да цифра три присутствует' : 'К сожалению тройки тут нет')


let pyramid = 'X'
console.log(pyramid);
const counter = 20
for (let i = 0; i <= counter + 1; i++) {
    pyramid += 'X'
    console.log(pyramid)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
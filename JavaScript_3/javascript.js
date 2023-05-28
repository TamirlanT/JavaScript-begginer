// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function cube(num) {
    return num ** 3
}
// const cube = num => num ** 3
const userNumber = Number(prompt('Введите число'))
console.log(cube(userNumber));

const firstNum = Number(prompt('Введите первое число'))
const secondNum = Number(prompt('Введите второе число'))

console.log(cube(firstNum) + cube(secondNum));

// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const salary = Number(prompt('Введите значение зароботной платы'))
if (!salary) {
    console.log(`Значение задано не верно`);
} else {
    console.log(`Размер заработной платы за вычетом налогов равен "${salary * 0.87}"`);
}


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, 
// необходимо создать функцию, которая определяет максимальное значение среди этих чисел

alert('Cейчас мы узнаем какое из трех чисел больше')
const firstNumber = Number(prompt('Введите первое число'))
const secondNumber = Number(prompt('Введите второе число'))
const thirdNumber = Number(prompt('Введите третье число'))

function maxNumber(numberOne, numberTwo, numberThree) {
    if (numberOne > numberTwo && numberOne > numberThree) {
        console.log(`${numberOne} больше остальных чисел`)
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        console.log(`${numberTwo} больше остальных чисел`)
    } else {
        console.log(`${numberThree} больше остальных чисел`)
    }
}

maxNumber(firstNumber, secondNumber, thirdNumber)

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно

const sum = (a, b) => a + b
const subtraction = (a, b) => {
    if (a >= b) {
        return a - b
    } else {
        return b - a
    }
}
const division = (a, b) => a / b
const multiplication = (a, b) => a * b

console.log(sum(2, 6))
console.log(subtraction(2, 6))
console.log(subtraction(2, 2))
console.log(division(4, 3))
console.log(multiplication(2, 5))

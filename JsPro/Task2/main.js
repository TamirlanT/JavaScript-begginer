/*
Представьте, что у вас есть класс для управления библиотекой.
 В этом классе будет приватное свойство для хранения списка книг,
а также методы для добавления книги, удаления книги и получения информации
о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется
пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке,
выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку 
с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в
библиотеке и возвращать true или false в зависимости от того, есть ли такая
книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) 
в качестве аргумента. Убедитесь, что предоставленный массив не содержит 
дубликатов; в противном случае выбрасывайте ошибку.
*/


class Library {
    #books = []


    // Конструктор , проверка на наличие дубликатов
    constructor(...book) {
        function duplicates(book) {
            return new Set(book).size !== book.length
        }

        for (let i in book) {
            if (typeof book[i] !== 'string' || book[i] === ''.trim()) {
                throw `неверные значения`
            }
        }

        if (duplicates(book)) {
            console.log('Есть дубликаты - запись отменена');
        } else {
            this.#books = book
            console.log('Значения успешно записаны без дубликатов');
        }
    }


    // геттер allBooks, который возвращает текущий список книг.
    get allBooks() {
        console.log(this.#books);
    }


    // метод addBook(title), который позволяет добавлять книгу в список. 
    // Если книга с таким названием уже существует в списке,
    // выбросьте ошибку с соответствующим сообщением.
    addBook(title) {
        try {
            if (this.hasBook(title) !== true) {
                if (title !== ''.trim()) {
                    this.#books.push(title)
                    console.log(`Книга ${title} успешно добавлена`);
                } else {
                    throw 'Пустая строка.'
                }
            } else {
                throw `Книга с таким названием ${title} уже существует в списке`
            }
        } catch (error) {
            throw `${error}`
        }
    }
    // метод hasBook(title), который будет проверять наличие книги в
    // библиотеке и возвращать true или false в зависимости от того, 
    // есть ли такая книга в списке или нет.
    hasBook(title) {
        try {
            if (title.trim() === ''.trim()) {
                throw error
            }
            let hasBook = false
            for (let book in this.#books) {
                if (this.#books[book].toLowerCase() === title.toLowerCase()) {
                    hasBook = true
                }
            }
            return hasBook
        } catch (error) {
            throw `Неккоректное значение `
        }

    }

    // метод removeBook(title), который позволит удалять книгу из списка 
    // по названию. Если книги с таким названием нет в списке, выбросьте ошибку 
    // с соответствующим сообщением.
    removeBook(title) {
        if (!this.hasBook(title)) {
            throw 'Такой книги нет'
        } else {
            let findIndex = this.#books.indexOf(title.toLowerCase())
            // console.log(findIndex);
            this.#books.splice(findIndex, 1)
            console.log(`Книга "${title}" удалена`);
        }
    }
}

// ПРОВЕРКА

const Book = new Library('book1', 'book2', 'book3')

Book.allBooks

// Book.addBook('') // пустая строка

//Book.addBook(2) // некоректное значение

//Book.addBook('BOOK1') // Книга уже существует

//Book.addBook('Book4') // Успешно добавлена

// console.log(Book.hasBook('BOOK3')); // true

// console.log(Book.hasBook('Book4')); // false

// console.log(Book.hasBook('')); // Некоректное значение

// console.log(Book.hasBook(2)); // Некоректное значение

// Book.removeBook('BOOK2') // Книга BOOK2 удалена

// Book.removeBook('BOOK2') // Такой книги нет

// Book.removeBook(2) // Неккоректное значение











/*
 Задание 1: ""Управление библиотекой книг""

 Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

 Свойство title (название) - строка, название книги.
 Свойство author (автор) - строка, имя автора книги.
 Свойство pages (количество страниц) - число, количество страниц в книге.
 Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
*/


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages
    }


    displayInfo = () => {
        console.log(`Название книги: ${this.title} \nАвтор книги: ${this.author} \nКоличество страниц: ${this.pages}`);
    }
}

const book1 = new Book('Harry Potter', 'J.K.Roawling', 450);
book1.displayInfo()
setTimeout(book1.displayInfo, 1000)


/*
 Задание 2: ""Управление списком студентов""
 Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

 Свойство name (имя) - строка, имя студента.
 Свойство age (возраст) - число, возраст студента.
 Свойство grade (класс) - строка, класс, в котором учится студент.
 Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
 javascript

 Пример использования класса
 const student1 = new Student(""John Smith"", 16, ""10th grade"");
 student1.displayInfo();
 Вывод:
 Name: John Smith
 Age: 16
 Grade: 10th grade

 const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
 student2.displayInfo();
 Вывод:
 Name: Jane Doe
 Age: 17
 Grade: 11th grade"
*/

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo = () => {
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGrade: ${this.grade}`);
    }
}

const student1 = new Student('Mike', 29, '5 grade');
student1.displayInfo();

const student2 = new Student('Gloria', 24, '7 grade');
student2.displayInfo();


class BankAccount {

    constructor(checkNumber, balance) {
        this.checkNumber = checkNumber;
        this.balance = balance;
    }

    deposit = (amount) => {
        this.balance += amount;
        console.log(`Deposited ${amount} into account: ${this.checkNumber}`);
    }

    withdrawn = (amount) => {
        if (this.balance - amount < 0) {
            console.log(`insufficient funds in account: ${this.checkNumber}`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.checkNumber}. New balance: ${this.balance}`);
        }

    }
}

const account1 = new BankAccount('123', 1000);

account1.deposit(100);
console.log(account1.balance);

account1.withdrawn(500);

/*
class Bank {
    clients = {}
    checks = []

    constructor(bankName) {
        this.bankName = bankName;
    }
    addClient = (clientName, age) => {
        clients = { Name: clientName, age: age }
    }

    openClient = (clientName, deposit) => {
        if (clients.name == clientName) {

        }

    }
}

*/

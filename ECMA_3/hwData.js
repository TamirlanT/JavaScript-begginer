/*
Задание 1: ""Управление персоналом компании""

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).

Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
Пример использования классов
const employee = new Employee(""John Smith"");
employee.displayInfo();
Вывод:
Name: John Smith

const manager = new Manager(""Jane Doe"", ""Sales"");
manager.displayInfo();
Вывод:
Name: Jane Doe
Department: Sales */

class Employee {

    constructor(name) {
        this.name = name
    }
    displyaInfo() {
        console.log(this.name);
    }
}

class Manager extends Employee {

    constructor(name, department) {
        super(name)
        this.department = department;
    }
    displyaInfo() {
        console.log('Name: ' + this.name);
        console.log('Department: ' + this.department);
    }
}

const employee1 = new Employee('Greg')
employee1.displyaInfo();

console.log(' ');

const manager1 = new Manager('Joe Doe', 'Sales')
manager1.displyaInfo();



/*
""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
Свойство orderNumber (номер заказа) - число, уникальный номер заказа.

Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

Пример использования класса
    class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    }

const order = new Order(12345);

const product1 = new Product(""Phone"", 500);
order.addProduct(product1);

const product2 = new Product(""Headphones"", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600 */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order extends Product {
    products;

    constructor(orderNumber) {
        super();
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        const totalSum = this.products.reduce((acc, el) => {
            return acc + el.price;
        }, 0);
        return totalSum;
    }
}

const order = new Order(12345);
console.log(order);

const product1 = new Product('Phone', 500);
order.addProduct(product1);



const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice());
console.log(order.products);


/* Задача необязательная для выполнения

Задача: Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.
Про приватные свойства и методы - https://learn.javascript.ru/private-protected-properties-methods

const student = new Student();
student.setName('Питер Паркер);
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo(); */

class Student {
    #name;
    #age;
    #averageGrade;

    setName(value) {
        this.#name = value;
    }

    setAge(value) {
        if (value <= 0) throw new Error('Значие не может быть ниже или равным "0"');
        this.#age = value;
    }

    setAverageGrade(value) {
        if (value < 0) throw new Error('Значие не может быть ниже "0"')
        this.#averageGrade = value;
    }

    displyaInfo() {
        console.log(`Name: ${this.#name} \nAge: ${this.#age} \nAverageGrade: ${this.#averageGrade}`);
    }
}

const student = new Student;
student.setName('Peter Parker');
student.setAge(20);
student.setAverageGrade(85);
student.displyaInfo();

// console.log(student.#name); -- error
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`The ${this.brand} ${this.model} is driving.`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive();


class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${this.owner}'s new balance is: ${this.balance}`);
    }
}


const myAccount = new BankAccount("Beqa", 100);
myAccount.deposit(50);


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        console.log(`The book ${this.title} is written by ${this.author}.`);
    }
}


const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
myBook.describe();

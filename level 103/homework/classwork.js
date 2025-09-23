// 3
class Teacher {
    setData(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.subject}.`);
    }
}

// 4
class Phone {
    setData(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    ring() {
        console.log(`The ${this.brand} ${this.model} is ringing!`);
    }
}

// 5
class Movie {
    setData(title, year) {
        this.title = title;
        this.year = year;
    }

    play() {
        console.log(`Now playing: ${this.title} (${this.year})`);
    }
}

// 6
class Cat {
    setData(name, color) {
        this.name = name;
        this.color = color;
    }

    meow() {
        console.log(`${this.name} the ${this.color} cat says Meow!`);
    }
}

// 7
class BankCard {
    setData(cardNumber, balance) {
        this.cardNumber = cardNumber;
        this.balance = balance;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful! New balance: ${this.balance}`);
        } else {
        console.log("Insufficient funds!");
        }
    }
}

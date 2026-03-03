// 1) 
const numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(num => num % 2 === 0);
console.log("ყველა რიცხვი ლუწია?", allEven); // true


// 2)
const students = [
    { name: "Nika", grade: 85 },
    { name: "Ana", grade: 45 },
    { name: "Gio", grade: 70 },
    { name: "Mariam", grade: 30 }
];

let passedStudents = students.filter(student => student.grade > 50);
console.log(passedStudents);



// 3)
const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 }
];

let foundProduct = products.find(product => product.price === 800);
console.log(foundProduct);


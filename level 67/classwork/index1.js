const student = {
    name: "beqa",
    surname: "gulbatashvili",
    academy: "GOA",
    role: "student",
    city: "tbilisi",
    favColor: "green",
    favLanguage: "JavaScript",


    sayHello: function () {
    console.log("Hello");
    },

    printFavColor: function () {
    console.log("favourite color:", this.favColor);
    }
};


console.log("მთლიანი ობიექტი:", student);

console.log("favourite language:", student.favLanguage);

student.city = "batumi";
console.log("განახლებული ქალაქი:", student.city);

student.sayHello();

student.printFavColor();

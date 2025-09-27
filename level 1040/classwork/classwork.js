function countKeys(obj) {
    return Object.keys(obj).length;
}

let student = {
    name: "beqa",
    age: 14,
    class: "9th"
};

console.log(countKeys(student));

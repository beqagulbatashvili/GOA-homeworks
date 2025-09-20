const student = {
    name: "გიორგი",
    age: 20,
    city: "თბილისი",
    grade: "A",
    hobby: "ფეხბურთი"
};

document.getElementById("name").textContent = "სახელი: " + student.name;
document.getElementById("age").textContent = "ასაკი: " + student.age;
document.getElementById("city").textContent = "ქალაქი: " + student.city;
document.getElementById("grade").textContent = "ქულა: " + student.grade;
document.getElementById("hobby").textContent = "ჰობი: " + student.hobby;

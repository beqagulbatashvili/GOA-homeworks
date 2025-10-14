// 1)
const checkString = async (str) => {
    if (str.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
};

checkString("hello").then((result) => {
    console.log(result);
});



// 2)
const checkNumber = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        num > 10 ? resolve("resolve") : reject("reject");
        }, 2000);
    });
};


const handlePromise = () => {
    checkNumber(15)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
};

handlePromise();

let count = 0;
let name = "beqa";

let intervalId = setInterval(() => {
    console.log(name);
    count ++;

    if (count === 4) {
        clearInterval(intervalId);
    }
}, 5000)

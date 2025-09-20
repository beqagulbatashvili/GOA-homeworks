let now = new Date();
console.log(now);

let anotherDate = new Date();
console.log(anotherDate);

let Since1970 = Date.now();
console.log(Since1970);



let now1 = new Date()
let days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
console.log(days[now1.getDay()])




let count = 0

let timer = setInterval(() => {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    if (h < 10) h = "0" + h
    if (m < 10) m = "0" + m
    if (s < 10) s = "0" + s

    console.log(h + ":" + m + ":" + s)

    count++
    if (count === 10) {
        clearInterval(timer)
    }
}, 1000)

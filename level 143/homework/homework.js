// 1
console.log("Platform from process")
console.log(process.platform)

// 2
console.log("Command line arguments")
process.argv.forEach((arg, index) => {
    console.log(index + " " + arg)
})

//3
const os = require("os")
console.log("OS name and version")
console.log(os.type())
console.log(os.release())

// 4
console.log("Total memory")
console.log(os.totalmem())
console.log("Free memory")
console.log(os.freemem())

// 5
console.log("Home directory")
console.log(os.homedir())

// 6
console.log("System uptime in seconds")
console.log(os.uptime())

// 7
console.log("Normal message")
console.warn("Warning message")
console.error("Error message")

// 8
const users = [
    { name: "Beka", age: 13, grade: 8 },
    { name: "Nika", age: 14, grade: 9 }
]

console.table(users)

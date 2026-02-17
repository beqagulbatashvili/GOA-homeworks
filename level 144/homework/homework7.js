const buffer = Buffer.from("Hello")

buffer[0] = 74
buffer[1] = 83

console.log(buffer)
console.log(buffer.toString())
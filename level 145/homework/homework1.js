const fs = require('fs')
const readline = require('readline')

const stream = fs.createReadStream('large.txt', 'utf8')

const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
})

rl.on('line', (line) => {
    console.log(line)
})

rl.on('close', () => {
    console.log('ფაილის კითხვა დასრულდა')
})
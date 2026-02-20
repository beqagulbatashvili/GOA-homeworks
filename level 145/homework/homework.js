const fs = require('fs')
const readline = require('readline')

const writeStream = fs.createWriteStream('output.txt', { encoding: 'utf8' })

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('შეიყვანე ტექსტი  გასასვლელად დაწერე exit')

rl.on('line', (input) => {

    if (input === 'exit') {
        rl.close()
        return
    }

    writeStream.write(input + '\n')
})

rl.on('close', () => {
    writeStream.end()
    console.log('ფაილი წარმატებით ჩაიწერა')
})
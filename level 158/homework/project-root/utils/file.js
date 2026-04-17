// fs გამოიყენება ფაილებთან სამუშაოდ
const fs = require('fs').promises
// path სწორ მისამართს ქმნის ფაილამდე
const path = require('path')

const filePath = path.join(__dirname, '..', 'data', 'products.json')

// კითხულობს JSON ფაილს და აბრუნებს მონაცემებს
async function readFileData() {
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data)
}

// ინახავს ახალ მონაცემებს JSON ფაილში
async function writeFileData(data) {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
}

module.exports = { readFileData, writeFileData }
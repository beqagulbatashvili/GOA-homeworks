// fs ბიბლიოთეკა ფაილებისთვის
const fs = require("fs")

// ფაილის წაკითხვა
function readFile() {
    const data = fs.readFileSync("data.json") // ფაილის წაკითხვა
    return JSON.parse(data) // JSON → JS ობიექტი
}

// ფაილში ჩაწერა
function writeFile(data) {
    fs.writeFileSync("data.json", JSON.stringify(data)) // JS → JSON
}

// export
module.exports = { readFile, writeFile }
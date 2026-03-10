const { readFile } = require("fs/promises")

async function Readfile(path) {
    const data = await readFile(path, "utf-8")
    return JSON.parse(data)
}

module.exports = Readfile

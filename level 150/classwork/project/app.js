const Readfile = require("./utils/Readfile")

async function main() {
    const data = await Readfile("./data.json")
    console.log(data)
}

main()
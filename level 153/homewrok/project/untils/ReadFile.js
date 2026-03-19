import { readFile } from "fs/promises"

async function ReadFile(path){
    const data = await readFile(path, "utf-8")
    return JSON.parse(data)
}

export default ReadFile
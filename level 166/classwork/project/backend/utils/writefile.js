import {writeFile} from "fs/promises"

const WriteFile = async (db, data) => {
    try {
        await writeFile(db, JSON.stringify(data), "utf8")
        return { message: "Data saved successfully" }
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default WriteFile


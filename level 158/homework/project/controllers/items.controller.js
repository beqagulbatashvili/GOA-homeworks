// utils ფუნქციების შემოტანა
const { readFile, writeFile } = require("../utils/file")

// ყველა მონაცემის წამოღება
function getAll(req, res) {
    const data = readFile() // ფაილის წაკითხვა
    res.send(data) // პასუხის დაბრუნება
}

// ერთი ელემენტის წამოღება id-ით
function getOne(req, res, next) {
    const data = readFile()
    const id = Number(req.params.id) // URL-დან id

    // ელემენტის ძებნა
    const item = data.find(function(el) {
        return el.id === id
    })

    // თუ ვერ მოიძებნა → error
    if (!item) {
        return next({ message: "not found", status: 404 })
    }

    res.send(item)
}

// ახალი ელემენტის შექმნა
function create(req, res) {
    // validation → name უნდა არსებობდეს
    if (!req.body.name) {
        return res.send("name is required")
    }

    const data = readFile()

    // ახალი ობიექტი
    const newItem = {
        id: Date.now(), // უნიკალური id
        name: req.body.name
    }

    data.push(newItem) // დამატება
    writeFile(data) // ფაილში ჩაწერა

    res.send(newItem)
}

// ელემენტის განახლება
function update(req, res, next) {
    const data = readFile()
    const id = Number(req.params.id)

    let found = false // ვამოწმებთ იპოვება თუ არა

    const updated = data.map(function(el) {
        if (el.id === id) {
            found = true
            return {
                id: el.id,
                name: req.body.name
            }
        }
        return el
    })

    // თუ ვერ მოიძებნა
    if (!found) {
        return next({ message: "not found", status: 404 })
    }

    writeFile(updated)
    res.send(updated)
}

// ელემენტის წაშლა
function remove(req, res, next) {
    const data = readFile()
    const id = Number(req.params.id)

    // filter ტოვებს ყველა ელემენტს გარდა წასაშლელის
    const filtered = data.filter(function(el) {
        return el.id !== id
    })

    // თუ არაფერი შეიცვალა → არ არსებობდა
    if (filtered.length === data.length) {
        return next({ message: "not found", status: 404 })
    }

    writeFile(filtered)
    res.send(filtered)
}

// export
module.exports = { getAll, getOne, create, update, remove }
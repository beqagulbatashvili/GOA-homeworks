// express ბიბლიოთეკის შემოტანა
const express = require("express")

// router და error middleware შემოტანა
const itemRouter = require("./routes/items.route")
const errorHandler = require("./middleware/error")

// სერვერის შექმნა
const app = express()

// პორტი
const PORT = 3000

// JSON მონაცემების წაკითხვა request-იდან
app.use(express.json())

// ყველა /items request გადადის router-ში
app.use("/items", itemRouter)

// error middleware რომელიც ყველა error-ს იჭერს
app.use(errorHandler)

// სერვერის გაშვება
app.listen(PORT)
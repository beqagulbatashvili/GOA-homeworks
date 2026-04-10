// express შემოტანა
const express = require("express")

// router შექმნა
const router = express.Router()

// controller შემოტანა
const controller = require("../controllers/items.controller")

// GET /items → ყველა მონაცემის დაბრუნება
router.get("/", controller.getAll)

// GET /items/:id → კონკრეტული ელემენტი id-ით
router.get("/:id", controller.getOne)

// POST /items → ახალი ელემენტის დამატება
router.post("/", controller.create)

// PUT /items/:id → ელემენტის განახლება
router.put("/:id", controller.update)

// DELETE /items/:id → ელემენტის წაშლა
router.delete("/:id", controller.remove)

// router export
module.exports = router
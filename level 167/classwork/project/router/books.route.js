import express from "express";
import { getAllBooks, getSingleBook } from "../controllers/books.controllers.js";

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getSingleBook);

export default router;
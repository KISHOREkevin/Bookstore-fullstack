import express from "express";
import Book from "../model/Book.js";
import { addBook, deleteBook, getAllBooks, getById, updateBook } from "../controllers/book-controller.js";

const router = express.Router();
router.get("/",getAllBooks);
router.post("/",addBook);
router.get("/:id",getById);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook);
export default router;
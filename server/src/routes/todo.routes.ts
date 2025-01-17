import express from "express";
import {
  getTodosController,
  createTodoController,
  deleteTodoController,
} from "../controllers/todo.controller";

const router = express.Router();

router.get("/", getTodosController);
router.post("/", createTodoController);
router.delete("/:id", deleteTodoController);

export default router;

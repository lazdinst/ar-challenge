import express from "express";
import {
  getTodosController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controllers";

const router = express.Router();

router.get("/", getTodosController);
router.post("/", createTodoController);
router.put("/", updateTodoController);
router.delete("/:id", deleteTodoController);

export default router;

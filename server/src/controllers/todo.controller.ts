import { Request, Response } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../services/todo.service";

export const getTodosController = (req: Request, res: Response): void => {
  const todos = getTodos();
  res.status(200).json(todos);
  return;
};

export const createTodoController = (req: Request, res: Response): void => {
  const todo = createTodo(req.body);
  res.status(201).json(todo);
  return;
};

export const updateTodoController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedTodo = updateTodo(id, req.body);
  if (updatedTodo) {
    res.status(200).json(updatedTodo); // Respond with the updated todo
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
  return;
};

export const deleteTodoController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const success = deleteTodo(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
  return;
};

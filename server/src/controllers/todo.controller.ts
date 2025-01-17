import { Request, Response } from "express";
import { getTodos, createTodo, deleteTodo } from "../services/todo.service";

export const getTodosController = (req: Request, res: Response) => {
  const todos = getTodos();
  res.status(200).json(todos);
};

export const createTodoController = (req: Request, res: Response) => {
  const todo = createTodo(req.body);
  res.status(201).json(todo);
};

export const deleteTodoController = (req: Request, res: Response) => {
  const { id } = req.params;
  const success = deleteTodo(id);
  if (success) {
    res.status(204).send();
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
};

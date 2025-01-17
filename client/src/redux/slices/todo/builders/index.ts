import { fetchTodosBuilder } from "./fetchTodos";
import { createTodoBuilder } from "./createTodo";
import { updateTodoBuilder } from "./updateTodo";
import { deleteTodoBuilder } from "./deleteTodo";

export const todoBuilders = [
  fetchTodosBuilder,
  createTodoBuilder,
  updateTodoBuilder,
  deleteTodoBuilder,
];

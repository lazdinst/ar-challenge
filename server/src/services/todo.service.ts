import { Todo } from "../models/todo.model";

const todos: Todo[] = [];

export const getTodos = (): Todo[] => todos;

export const createTodo = (todo: Todo): Todo => {
  todos.push(todo);
  return todo;
};

export const deleteTodo = (id: string): boolean => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

import { Todo } from "../models/todo.model";

export const todos: Todo[] = [
  {
    id: "1",
    title: "Complete React Project",
    description:
      "Finish building the frontend for the todo app using React and Redux.",
    dueDate: "2025-01-20",
    category: "Work",
    completed: false,
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T12:00:00Z",
  },
  {
    id: "2",
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and other household items.",
    dueDate: "2025-01-18",
    category: "Personal",
    completed: true,
    createdAt: "2025-01-14T08:30:00Z",
    updatedAt: "2025-01-15T09:00:00Z",
  },
];

export const getTodos = (): Todo[] => todos;

export const createTodo = (todo: Todo): Todo => {
  //TODO:  uuid for this todo should be generated here
  todos.push(todo);
  return todo;
};

export const updateTodo = (id: string, updatedTodo: Todo): boolean => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos[index] = updatedTodo;
    return true;
  }
  return false;
};

export const deleteTodo = (id: string): boolean => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
};

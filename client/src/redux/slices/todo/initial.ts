import { TodoState } from "./types";

export const initialState: TodoState = {
  status: "",
  todos: [],
  error: null,
  loading: {
    fetchTodos: false,
    createTodo: false,
    updateTodo: false,
    deleteTodo: false,
  },
};

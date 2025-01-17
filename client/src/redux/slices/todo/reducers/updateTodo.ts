import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItem } from "../types";

export const updateTodo = (
  state: TodoState,
  action: PayloadAction<TodoItem>
) => {
  const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
  if (index !== -1) {
    state.todos[index] = action.payload;
  }
};

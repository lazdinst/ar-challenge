import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItemType } from "../types";

export const updateTodo = (
  state: TodoState,
  action: PayloadAction<TodoItemType>
) => {
  const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
  if (index !== -1) {
    state.todos[index] = action.payload;
  }
};

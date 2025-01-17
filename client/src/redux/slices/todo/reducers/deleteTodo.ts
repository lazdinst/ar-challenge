import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types";

export const deleteTodo = (state: TodoState, action: PayloadAction<string>) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};

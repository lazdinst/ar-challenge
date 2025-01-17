import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItem } from "../types";

export const fetchTodos = (
  state: TodoState,
  action: PayloadAction<TodoItem[]>
) => {
  state.todos = action.payload;
};

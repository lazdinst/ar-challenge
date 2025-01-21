import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItemType } from "../types";

export const fetchTodos = (
  state: TodoState,
  action: PayloadAction<TodoItemType[]>
) => {
  state.todos = action.payload;
};

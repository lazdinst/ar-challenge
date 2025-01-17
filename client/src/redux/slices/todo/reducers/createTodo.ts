import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItem } from "../types";

export const createTodo = (
  state: TodoState,
  action: PayloadAction<TodoItem>
) => {
  state.todos.push(action.payload);
};

import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState, TodoItemType } from "../types";

export const createTodo = (
  state: TodoState,
  action: PayloadAction<TodoItemType>
) => {
  state.todos.push(action.payload);
};

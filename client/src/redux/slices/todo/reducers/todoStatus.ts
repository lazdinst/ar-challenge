import { PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../types";

export const setTodoStatus = (
  state: TodoState,
  action: PayloadAction<string>
) => {
  state.status = action.payload;
};

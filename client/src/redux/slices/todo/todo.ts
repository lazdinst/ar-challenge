import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { todoReducers } from "./reducers";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ...todoReducers,
  },
  extraReducers: () => {},
});

export const { createTodo, updateTodo, deleteTodo, fetchTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { todoReducers } from "./reducers";
import { todoBuilders } from "./builders";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ...todoReducers,
  },
  extraReducers: (builder) => {
    todoBuilders.forEach((applyBuilder) => applyBuilder(builder));
  },
});

export const { createTodo, updateTodo, deleteTodo, fetchTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

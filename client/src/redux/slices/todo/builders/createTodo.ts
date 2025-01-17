import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../types";
import { createTodoThunk } from "../thunks/createTodoThunk";

export const createTodoBuilder = (
  builder: ActionReducerMapBuilder<TodoState>
) => {
  builder
    .addCase(createTodoThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(createTodoThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    })
    .addCase(createTodoThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to create todo";
    });
};

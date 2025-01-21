import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../types";
import { fetchTodosThunk } from "../thunks/fetchTodosThunk";

export const fetchTodosBuilder = (
  builder: ActionReducerMapBuilder<TodoState>
) => {
  builder
    .addCase(fetchTodosThunk.pending, (state) => {
      state.loading.fetchTodos = true;
      state.error = null;
    })
    .addCase(fetchTodosThunk.fulfilled, (state, action) => {
      state.loading.fetchTodos = false;
      state.todos = action.payload;
    })
    .addCase(fetchTodosThunk.rejected, (state, action) => {
      state.loading.fetchTodos = false;
      state.error = action.error.message || "Failed to fetch todos";
    });
};

import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../types";
import { deleteTodoThunk } from "../thunks";

export const deleteTodoBuilder = (
  builder: ActionReducerMapBuilder<TodoState>
) => {
  builder
    .addCase(deleteTodoThunk.pending, (state) => {
      state.loading.deleteTodo = true;
    })
    .addCase(deleteTodoThunk.fulfilled, (state, action) => {
      state.loading.deleteTodo = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    })
    .addCase(deleteTodoThunk.rejected, (state, action) => {
      state.loading.deleteTodo = false;
      state.error = action.error.message || "Failed to delete todo";
    });
};

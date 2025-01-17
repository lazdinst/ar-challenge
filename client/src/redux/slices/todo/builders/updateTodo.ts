import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TodoState } from "../types";
import { updateTodoThunk } from "../thunks";

export const updateTodoBuilder = (
  builder: ActionReducerMapBuilder<TodoState>
) => {
  builder
    .addCase(updateTodoThunk.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateTodoThunk.fulfilled, (state, action) => {
      state.loading = false;
      const updatedTodo = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    })
    .addCase(updateTodoThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to update todo";
    });
};

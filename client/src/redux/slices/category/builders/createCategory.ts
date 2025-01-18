import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { createCategoryThunk } from "../thunks";

export const createCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(createCategoryThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.push(action.payload);
    })
    .addCase(createCategoryThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to create category";
    });
};

import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { updateCategoryThunk } from "../thunks";

export const updateCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(updateCategoryThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(updateCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.categories.findIndex(
        (category) => category.id === action.payload.id
      );
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    })
    .addCase(updateCategoryThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to update category";
    });
};

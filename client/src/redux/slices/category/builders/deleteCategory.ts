import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { deleteCategoryThunk } from "../thunks";

export const deleteCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(deleteCategoryThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    })
    .addCase(deleteCategoryThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to delete category";
    });
};

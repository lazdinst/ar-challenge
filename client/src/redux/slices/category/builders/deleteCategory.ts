import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { deleteCategoryThunk } from "../thunks";

export const deleteCategoryBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(deleteCategoryThunk.pending, (state) => {
      state.loading.deleteCategory = true;
      state.error = null;
    })
    .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
      state.loading.deleteCategory = false;
      state.categories = action.payload.categories;
    })
    .addCase(deleteCategoryThunk.rejected, (state, action) => {
      state.loading.deleteCategory = false;
      state.error = action.error.message || "Failed to delete category";
    });
};

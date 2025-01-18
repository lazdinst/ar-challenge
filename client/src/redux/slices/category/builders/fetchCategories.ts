import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { fetchCategoriesThunk } from "../thunks";

export const fetchCategoriesBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(fetchCategoriesThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategoriesThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch categories";
    });
};

import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CategoryState } from "../types";
import { fetchCategoriesThunk } from "../thunks";

export const fetchCategoriesBuilder = (
  builder: ActionReducerMapBuilder<CategoryState>
) => {
  builder
    .addCase(fetchCategoriesThunk.pending, (state) => {
      state.loading.fetchCategories = true;
      state.error = null;
    })
    .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
      state.loading.fetchCategories = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategoriesThunk.rejected, (state, action) => {
      state.loading.fetchCategories = false;
      state.error = action.error.message || "Failed to fetch categories";
    });
};

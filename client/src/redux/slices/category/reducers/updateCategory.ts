import { PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, Category } from "../types";

export const updateCategoryReducer = (
  state: CategoryState,
  action: PayloadAction<Category>
) => {
  const index = state.categories.findIndex(
    (category) => category.id === action.payload.id
  );

  if (index !== -1) {
    state.categories[index] = action.payload;
  }
};

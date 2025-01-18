import { PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, Category } from "../types";

export const fetchCategoriesReducer = (
  state: CategoryState,
  action: PayloadAction<Category[]>
) => {
  state.categories = action.payload;
};

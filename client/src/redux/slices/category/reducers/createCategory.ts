import { PayloadAction } from "@reduxjs/toolkit";
import { CategoryState, Category } from "../types";

export const createCategoryReducer = (
  state: CategoryState,
  action: PayloadAction<Category>
) => {
  state.categories.push(action.payload);
};

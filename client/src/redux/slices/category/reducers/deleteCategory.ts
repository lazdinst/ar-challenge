import { PayloadAction } from "@reduxjs/toolkit";
import { CategoryState } from "../types";

export const deleteCategoryReducer = (
  state: CategoryState,
  action: PayloadAction<string>
) => {
  state.categories = state.categories.filter(
    (category) => category.id !== action.payload
  );
};

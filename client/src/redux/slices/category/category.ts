import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initial";
import { categoryReducers } from "./reducers";
import { categoryBuilders } from "./builders";

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    ...categoryReducers,
  },
  extraReducers: (builder) => {
    categoryBuilders.forEach((applyBuilder) => applyBuilder(builder));
  },
});

export const {
  createCategory,
  updateCategory,
  deleteCategory,
  fetchCategories,
} = categorySlice.actions;

export default categorySlice.reducer;

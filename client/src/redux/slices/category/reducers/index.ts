import { createCategoryReducer } from "./createCategory";
import { fetchCategoriesReducer } from "./fetchCategories";
import { deleteCategoryReducer } from "./deleteCategory";
import { updateCategoryReducer } from "./updateCategory";

export const categoryReducers = {
  createCategory: createCategoryReducer,
  fetchCategories: fetchCategoriesReducer,
  deleteCategory: deleteCategoryReducer,
  updateCategory: updateCategoryReducer,
};

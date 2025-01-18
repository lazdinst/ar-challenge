import { fetchCategoriesBuilder } from "./fetchCategories";
import { createCategoryBuilder } from "./createCategory";
import { deleteCategoryBuilder } from "./deleteCategory";
import { updateCategoryBuilder } from "./updateCategory";

export const categoryBuilders = [
  fetchCategoriesBuilder,
  createCategoryBuilder,
  deleteCategoryBuilder,
  updateCategoryBuilder,
];

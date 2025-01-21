import { CategoryState } from "./types";

export const initialState: CategoryState = {
  categories: [],
  error: null,
  loading: {
    fetchCategories: false,
    createCategory: false,
    updateCategory: false,
    deleteCategory: false,
  },
};

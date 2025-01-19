import { Category } from "../models/category.model";
import { categories } from "./categories.defaults";

export const getCategories = (): Category[] => categories;

export const createCategory = (category: Category): Category => {
  categories.push(category);
  return category;
};

export const updateCategory = (
  id: string,
  updates: Partial<Category>
): Category | null => {
  const index = categories.findIndex((category) => category.id === id);
  if (index === -1) return null;

  categories[index] = {
    ...categories[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  return categories[index];
};

export const deleteCategory = (id: string): boolean => {
  const index = categories.findIndex((category) => category.id === id);
  if (index === -1) return false;

  categories.splice(index, 1);
  return true;
};

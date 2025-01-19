import { Category } from "../models/category.model";

const categories: Category[] = [
  {
    id: "1",
    name: "Work",
    color: "#FF5733",
    createdAt: "2025-01-01T08:00:00.000Z",
    updatedAt: "2025-01-01T08:00:00.000Z",
  },
  {
    id: "2",
    name: "Personal",
    color: "#33A1FF",
    createdAt: "2025-01-02T09:00:00.000Z",
    updatedAt: "2025-01-02T09:00:00.000Z",
  },
  {
    id: "3",
    name: "Shopping",
    color: "#9B59B6",
    createdAt: "2025-01-03T10:00:00.000Z",
    updatedAt: "2025-01-03T10:00:00.000Z",
  },
  {
    id: "4",
    name: "Fitness",
    color: "#2ECC71",
    createdAt: "2025-01-04T11:00:00.000Z",
    updatedAt: "2025-01-04T11:00:00.000Z",
  },
  {
    id: "5",
    name: "Travel",
    color: "#F1C40F",
    createdAt: "2025-01-05T12:00:00.000Z",
    updatedAt: "2025-01-05T12:00:00.000Z",
  },
];

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

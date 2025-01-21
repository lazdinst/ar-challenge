import { Category } from "../models/category.model";
import { updateTodo } from "./todo.service";
import { Todo } from "../models/todo.model";
import { todos, categories } from "../state";
import { v4 as uuidv4 } from "uuid";

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

export const deleteCategory = (id: string): { success: boolean } => {
  // Find the index of the category to delete
  const index = categories.findIndex((category) => category.id === id);
  if (index === -1) return { success: false };

  // Ensure an "Uncategorized" category exists
  let uncategorized = categories.find(
    (category) => category.name === "Uncategorized"
  );

  if (!uncategorized) {
    uncategorized = {
      id: uuidv4(),
      name: "Uncategorized",
      color: "#cccccc",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    createCategory(uncategorized);
  }

  // Prevent deletion of the "Uncategorized" category
  if (id === uncategorized.id) {
    return { success: false };
  }

  // Update todos with the deleted category to "Uncategorized"
  const updatedTodos: Todo[] = [];
  todos.forEach((todo) => {
    if (todo.category === id) {
      const updatedTodo = updateTodo(todo.id, {
        ...todo,
        category: uncategorized.id,
      });
      if (updatedTodo) {
        updatedTodos.push(updatedTodo);
      }
    }
  });

  // Remove the category from the global categories array
  categories.splice(index, 1);

  // Return the updated todos for further processing
  return { success: true };
};

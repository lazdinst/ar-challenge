import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoItemType } from "../../todo/types";
import { Category } from "../types";
import { updateTodo } from "../../todo";

export const deleteCategoryThunk = createAsyncThunk<
  { categories: Category[] },
  string,
  { rejectValue: string }
>(
  "category/deleteCategory",
  async (categoryId, { dispatch, rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/categories/${categoryId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }

      const data = await response.json();

      const { success, todos, categories } = data;

      if (!success) {
        throw new Error("Failed to delete category");
      }

      // Dispatch updateTodo for each updated todo
      if (todos) {
        todos.forEach((todo: TodoItemType) => {
          dispatch(updateTodo(todo));
        });
      }

      return { categories };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

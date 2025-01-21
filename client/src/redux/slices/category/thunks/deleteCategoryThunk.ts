import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoItemType } from "../../todo/types";
import { updateTodo } from "../../todo";

export const deleteCategoryThunk = createAsyncThunk<
  { categoryId: string },
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
      console.log(data);
      // Dispatch updateTodo for each updated todo
      if (data.updatedTodos) {
        data.updatedTodos.forEach((todo: TodoItemType) => {
          dispatch(updateTodo(todo));
        });
      }

      return { categoryId };
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

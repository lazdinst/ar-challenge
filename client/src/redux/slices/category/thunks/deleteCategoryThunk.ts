import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCategoryThunk = createAsyncThunk<string, string>(
  "category/deleteCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await fetch(`/api/categories/${categoryId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete category");
      }
      return categoryId;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

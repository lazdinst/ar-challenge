import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../types";

export const fetchCategoriesThunk = createAsyncThunk<Category[]>(
  "category/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/categories");
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

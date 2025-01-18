import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../types";

interface CreateCategoryPayload {
  name: string;
  color?: string;
}

export const createCategoryThunk = createAsyncThunk<
  Category,
  CreateCategoryPayload
>("category/createCategory", async (newCategory, { rejectWithValue }) => {
  try {
    const response = await fetch("http://localhost:5000/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });
    if (!response.ok) {
      throw new Error("Failed to create category");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

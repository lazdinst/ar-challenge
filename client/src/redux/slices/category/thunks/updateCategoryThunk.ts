import { createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../types";

interface UpdateCategoryPayload {
  id: string;
  name: string;
  color?: string;
}

export const updateCategoryThunk = createAsyncThunk<
  Category,
  UpdateCategoryPayload
>("category/updateCategory", async (updatedCategory, { rejectWithValue }) => {
  try {
    const response = await fetch(`/api/categories/${updatedCategory.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCategory),
    });
    if (!response.ok) {
      throw new Error("Failed to update category");
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

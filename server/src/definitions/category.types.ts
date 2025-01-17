import { APIResponse } from "./api.types";

export interface CategoryRequestBody {
  name: string;
  color?: string;
}

export interface Category {
  id: string;
  name: string;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateCategoryResponse = APIResponse<Category>;
export type DeleteCategoryResponse = APIResponse<{ id: string }>;

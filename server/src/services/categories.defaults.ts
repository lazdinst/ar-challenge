import { Category } from "../models/category.model";
import { v4 as uuidv4 } from "uuid";

export const initialCategories: Category[] = [
  {
    id: uuidv4(),
    name: "Work",
    color: "#FF5733",
    createdAt: "2025-01-01T08:00:00.000Z",
    updatedAt: "2025-01-01T08:00:00.000Z",
  },
  {
    id: uuidv4(),
    name: "Personal",
    color: "#33A1FF",
    createdAt: "2025-01-02T09:00:00.000Z",
    updatedAt: "2025-01-02T09:00:00.000Z",
  },
];

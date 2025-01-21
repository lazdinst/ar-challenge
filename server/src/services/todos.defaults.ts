import { Todo } from "../models/todo.model";
import { categories } from "./categories.defaults";
import { v4 as uuidv4 } from "uuid";

const workCategoryId = categories.find((cat) => cat.name === "Work")?.id || "";
const personalCategoryId =
  categories.find((cat) => cat.name === "Personal")?.id || "";

export const todos: Todo[] = [
  {
    id: uuidv4(),
    title: "Complete React Project",
    description:
      "Finish building the frontend for the todo app using React and Redux.",
    dueDate: "2025-01-20",
    category: workCategoryId,
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and other household items.",
    dueDate: "2025-01-18",
    category: personalCategoryId,
    completed: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

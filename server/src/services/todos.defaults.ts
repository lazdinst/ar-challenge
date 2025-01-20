import { Todo } from "../models/todo.model";
import { v4 as uuidv4 } from "uuid";

export const todos: Todo[] = [
  {
    id: uuidv4(),
    title: "Complete React Project",
    description:
      "Finish building the frontend for the todo app using React and Redux.",
    dueDate: "2025-01-20",
    category: "Work",
    completed: false,
    createdAt: "2025-01-15T10:00:00Z",
    updatedAt: "2025-01-15T12:00:00Z",
  },
  {
    id: uuidv4(),
    title: "Grocery Shopping",
    description: "Buy vegetables, fruits, and other household items.",
    dueDate: "2025-01-18",
    category: "Personal",
    completed: true,
    createdAt: "2025-01-14T08:30:00Z",
    updatedAt: "2025-01-15T09:00:00Z",
  },
];

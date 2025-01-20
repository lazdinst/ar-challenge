import { TodoItemType } from "../../../redux/slices/todo/types";

export const useSortedTodos = (
  todos: TodoItemType[],
  sortOrder: "dueDate" | "creationDate",
  sortDirection: "asc" | "desc"
) => {
  return [...todos].sort((a, b) => {
    const key = sortOrder === "dueDate" ? "dueDate" : "createdAt";
    const diff = new Date(a[key]).getTime() - new Date(b[key]).getTime();
    return sortDirection === "asc" ? diff : -diff;
  });
};

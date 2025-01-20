import { TodoItemType } from "../../../redux/slices/todo/types";

export const useFilteredTodos = (todos: TodoItemType[], filter: string) => {
  return todos.filter((todo) => {
    if (filter === "all") return true;
    return filter === "active" ? !todo.completed : todo.completed;
  });
};

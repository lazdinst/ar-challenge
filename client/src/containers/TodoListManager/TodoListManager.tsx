import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchTodosThunk } from "../../redux/slices/todo/thunks";
import TodosControls from "../TodosControls";
import TodoDNDManager from "../TodoDNDManager";

const TodoListManager: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const loading = useSelector(
    (state: RootState) => state.todo.loading.fetchTodos
  );
  const error = useSelector((state: RootState) => state.todo.error);

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortOrder, setSortOrder] = useState<"dueDate" | "creationDate">(
    "dueDate"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "all") return true;
      return filter === "active" ? !todo.completed : todo.completed;
    });
  }, [todos, filter]);

  const sortedTodos = useMemo(() => {
    const key = sortOrder === "dueDate" ? "dueDate" : "createdAt";
    return [...filteredTodos].sort((a, b) => {
      const diff = new Date(a[key]).getTime() - new Date(b[key]).getTime();
      return sortDirection === "asc" ? diff : -diff;
    });
  }, [filteredTodos, sortOrder, sortDirection]);

  const groupedTodos = useMemo(() => {
    return categories.reduce<Record<string, typeof todos>>(
      (acc, category) => {
        acc[category.name] = sortedTodos.filter(
          (todo) => todo.category === category.name
        );
        return acc;
      },
      { Uncategorized: sortedTodos.filter((todo) => !todo.category) }
    );
  }, [sortedTodos, categories]);

  if (loading) return <div>Loading todos...</div>;
  if (error)
    return (
      <div>
        <p>Error loading todos: {error}</p>
        <button onClick={() => dispatch(fetchTodosThunk())}>Retry</button>
      </div>
    );

  return (
    <>
      <TodosControls
        currentFilter={filter}
        currentSortOrder={sortOrder}
        sortDirection={sortDirection}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
        onSortDirectionChange={setSortDirection}
      />
      <TodoDNDManager groupedTodos={groupedTodos} />
    </>
  );
};

export default TodoListManager;

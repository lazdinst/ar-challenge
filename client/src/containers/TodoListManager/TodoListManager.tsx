import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchTodosThunk } from "../../redux/slices/todo/thunks";
import { fetchCategoriesThunk } from "../../redux/slices/category/thunks";
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
  const todoError = useSelector((state: RootState) => state.todo.error);
  const categoryError = useSelector((state: RootState) => state.category.error);

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortOrder, setSortOrder] = useState<"dueDate" | "creationDate">(
    "dueDate"
  );
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleFetch = () => {
    dispatch(fetchTodosThunk());
    dispatch(fetchCategoriesThunk());
  };

  useEffect(() => {
    handleFetch();
  }, [dispatch, handleFetch]);

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
    return categories.reduce<Record<string, typeof todos>>((acc, category) => {
      acc[category.id] = sortedTodos.filter(
        (todo) => todo.category === category.id
      );
      return acc;
    }, {});
  }, [sortedTodos, categories]);

  if (loading) return <div>Loading todos...</div>;
  if (todoError || categoryError)
    return (
      <div>
        <p>
          Error loading data: {todoError} {categoryError}
        </p>
        <button onClick={() => handleFetch()}>Retry</button>
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

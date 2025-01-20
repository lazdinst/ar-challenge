import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchTodosThunk } from "../../redux/slices/todo/thunks";
import TodoList from "../TodoList";

const TodoManagerContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);
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

  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSortOrder: "dueDate" | "creationDate") => {
    setSortOrder(newSortOrder);
  };

  const handleSortDirectionChange = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  if (loading) return <div>Loading todos...</div>;
  if (error)
    return (
      <div>
        <p>Error loading todos: {error}</p>
        <button onClick={() => dispatch(fetchTodosThunk())}>Retry</button>
      </div>
    );

  return (
    <TodoList
      todos={sortedTodos}
      onFilterChange={handleFilterChange}
      onSortChange={handleSortChange}
      onSortDirectionChange={handleSortDirectionChange}
      currentFilter={filter}
      currentSortOrder={sortOrder}
      sortDirection={sortDirection}
    />
  );
};

export default TodoManagerContainer;

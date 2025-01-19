import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchTodosThunk } from "../../redux/slices/todo/thunks";
import { TodoList } from "../../components";

const TodoManagerContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector((state: RootState) => state.todo.todos);
  const loading = useSelector((state: RootState) => state.todo.loading);
  const error = useSelector((state: RootState) => state.todo.error);

  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [sortOrder, setSortOrder] = useState<"dueDate" | "creationDate">(
    "dueDate"
  );

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    return filter === "active" ? !todo.completed : todo.completed;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    const key = sortOrder === "dueDate" ? "dueDate" : "createdAt";
    return new Date(a[key]).getTime() - new Date(b[key]).getTime();
  });

  const handleFilterChange = (newFilter: "all" | "active" | "completed") => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSortOrder: "dueDate" | "creationDate") => {
    setSortOrder(newSortOrder);
  };

  if (loading) return <div>Loading todos...</div>;
  if (error) return <div>Error loading todos: {error}</div>;

  return (
    <TodoList
      todos={sortedTodos}
      onFilterChange={handleFilterChange}
      onSortChange={handleSortChange}
      currentFilter={filter}
      currentSortOrder={sortOrder}
    />
  );
};

export default TodoManagerContainer;

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux";
import { fetchTodosThunk } from "../redux/slices/todo";
import { AddTodoContainer } from "../containers";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos);
  const loading = useSelector((state: RootState) => state.todo.loading);
  const error = useSelector((state: RootState) => state.todo.error);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoContainer />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.category}</p>
            <p>Due: {todo.dueDate}</p>
            <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

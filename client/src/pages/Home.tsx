import React from "react";
import { AddTodoContainer, TodoListContainer } from "../containers";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
};

export default Home;

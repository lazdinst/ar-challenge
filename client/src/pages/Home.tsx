import React from "react";
import { AddTodoContainer, TodoListManager } from "../containers";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoContainer />
      <TodoListManager />
    </div>
  );
};

export default Home;

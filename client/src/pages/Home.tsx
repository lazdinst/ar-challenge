import React from "react";
import {
  AddTodoContainer,
  TodoListManager,
  EditTodoModal,
} from "../containers";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { HomePageWrapper } from "./Home.style";
const Home: React.FC = () => {
  const modals = useSelector((state: RootState) => state.ui.modals);

  return (
    <HomePageWrapper>
      <div>Todo List</div>
      <AddTodoContainer />
      <TodoListManager />
      {Object.keys(modals).map((modalId) => {
        if (modalId.startsWith("editTodo-")) {
          const todoId = modalId.replace("editTodo-", "");
          return <EditTodoModal key={modalId} todoId={todoId} />;
        }
        return null;
      })}
    </HomePageWrapper>
  );
};

export default Home;

import React from "react";
import {
  AddTodoContainer,
  // TodoListManager,
  EditTodoModal,
} from "../containers";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import TodoDNDManager from "../containers/TodoDNDManager/TodoDNDManager";

const Home: React.FC = () => {
  const modals = useSelector((state: RootState) => state.ui.modals);

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoContainer />
      {/* <TodoListManager /> */}
      {Object.keys(modals).map((modalId) => {
        if (modalId.startsWith("editTodo-")) {
          const todoId = modalId.replace("editTodo-", "");
          return <EditTodoModal key={modalId} todoId={todoId} />;
        }
        return null;
      })}
      <TodoDNDManager />
    </div>
  );
};

export default Home;

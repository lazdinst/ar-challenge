import React from "react";
import { TodoItem as TodoType } from "../../redux/slices/todo/types";
import { TodoItemWrapper } from "./TodoList.style";

interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <TodoItemWrapper>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
      <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
    </TodoItemWrapper>
  );
};

export default TodoItem;

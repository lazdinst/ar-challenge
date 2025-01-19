import React from "react";
import { useAppDispatch } from "../../redux/store";
import { TodoItem as TodoType } from "../../redux/slices/todo/types";
import { TodoItemWrapper, ActionButtons } from "./TodoList.style";
import {
  deleteTodoThunk,
  updateTodoThunk,
} from "../../redux/slices/todo/thunks";
import { openModal } from "../../redux/slices/ui/ui";
import Button from "../../components/Button/Button";

interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    dispatch(openModal(`editTodo-${todo.id}`));
  };

  const handleToggleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodoThunk(updatedTodo));
  };

  const handleDelete = () => {
    dispatch(deleteTodoThunk(todo.id));
  };

  return (
    <TodoItemWrapper>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Due: {new Date(todo.dueDate).toLocaleDateString()}</p>
      <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
      <ActionButtons>
        <Button type="button" onClick={handleEdit} variant="primary">
          Edit
        </Button>
        <Button
          type="button"
          onClick={handleToggleComplete}
          variant={todo.completed ? "secondary" : "primary"}
        >
          {todo.completed ? "Mark Incomplete" : "Mark Complete"}
        </Button>
        <Button type="button" onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </ActionButtons>
    </TodoItemWrapper>
  );
};

export default TodoItem;

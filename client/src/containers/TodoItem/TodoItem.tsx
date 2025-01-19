import React from "react";
import { useAppDispatch } from "../../redux/store";
import { TodoItem as TodoType } from "../../redux/slices/todo/types";
import {
  TodoItemWrapper,
  CheckboxWrapper,
  TodoContentWrapper,
  ActionButtons,
  TodoItemDate,
} from "./TodoItem.style";
import {
  deleteTodoThunk,
  updateTodoThunk,
} from "../../redux/slices/todo/thunks";
import { openModal } from "../../redux/slices/ui/ui";
import { Button, Icon } from "../../components";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const handleToggleComplete = () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    dispatch(updateTodoThunk(updatedTodo));
  };

  const handleEdit = () => {
    dispatch(openModal(`editTodo-${todo.id}`));
  };

  const handleDelete = () => {
    dispatch(deleteTodoThunk(todo.id));
  };

  const isOverdue = new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <TodoItemWrapper className={todo.completed ? "completed" : ""}>
      <CheckboxWrapper>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
        />
      </CheckboxWrapper>
      <TodoContentWrapper>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <TodoItemDate isOverDue={isOverdue}>
          Due: {new Date(todo.dueDate).toLocaleDateString()}
        </TodoItemDate>
      </TodoContentWrapper>
      <ActionButtons>
        <Button onClick={handleEdit}>
          <Icon icon={faEdit} size="lg" />
        </Button>
        <Button onClick={handleDelete} variant="danger">
          <Icon icon={faTrash} size="lg" />
        </Button>
      </ActionButtons>
    </TodoItemWrapper>
  );
};

export default TodoItem;

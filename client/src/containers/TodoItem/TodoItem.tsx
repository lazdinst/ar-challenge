import React from "react";
import { useAppDispatch } from "../../redux";
import { TodoItemType } from "../../redux/slices/todo/types";
import {
  TodoContent,
  TodoItemWrapper,
  CheckboxWrapper,
  TodoContentWrapper,
  TodoItemDate,
  TodoFooter,
  TodoTitle,
} from "./TodoItem.style";
import { updateTodoThunk } from "../../redux/slices/todo/thunks";
import { openModal } from "../../redux/slices/ui/ui";
import { Checkbox } from "../../components";
interface TodoItemProps {
  todo: TodoItemType;
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

  const isOverdue = new Date(todo.dueDate) < new Date() && !todo.completed;

  return (
    <TodoItemWrapper $completed={todo.completed}>
      <TodoContentWrapper>
        <TodoContent>
          <CheckboxWrapper>
            <Checkbox
              checked={todo.completed}
              onChange={handleToggleComplete}
            />
          </CheckboxWrapper>
          <TodoTitle onClick={handleEdit}>{todo.title}</TodoTitle>
        </TodoContent>
        <TodoFooter>
          <TodoItemDate $isOverDue={isOverdue}>
            Due: {new Date(todo.dueDate).toLocaleDateString()}
          </TodoItemDate>
        </TodoFooter>
      </TodoContentWrapper>
    </TodoItemWrapper>
  );
};

export default TodoItem;

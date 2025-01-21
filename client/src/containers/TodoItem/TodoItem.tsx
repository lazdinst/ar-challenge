import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { TodoItemType } from "../../redux/slices/todo/types";
import {
  TodoContent,
  TodoItemWrapper,
  CheckboxWrapper,
  TodoContentWrapper,
  // ActionButtons,
  TodoItemDate,
  TodoFooter,
} from "./TodoItem.style";
import {
  deleteTodoThunk,
  updateTodoThunk,
} from "../../redux/slices/todo/thunks";
import { openModal } from "../../redux/slices/ui/ui";
// import { Button, Icon } from "../../components";
// import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
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
  // const loading = useAppSelector((state) => state.todo.loading.deleteTodo);
  const handleEdit = () => {
    dispatch(openModal(`editTodo-${todo.id}`));
  };

  // const handleDelete = () => {
  //   dispatch(deleteTodoThunk(todo.id));
  // };

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
          <h3 onClick={handleEdit}>{todo.title}</h3>
          {/* <p>{todo.description}</p> */}
        </TodoContent>
        {/* <ActionButtons>
        <Button
        onClick={handleEdit}
        loading={false}
        content={<Icon icon={faEdit} size="lg" />}
        />
        <Button
        onClick={handleDelete}
        variant="danger"
        loading={loading}
        content={<Icon icon={faTrash} size="lg" />}
        />
        </ActionButtons> */}
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

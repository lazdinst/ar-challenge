import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { updateTodoThunk, deleteTodoThunk } from "../../redux/slices/todo";
import { closeModal } from "../../redux/slices/ui";
import { Button, Input, Dropdown, Icon } from "../../components";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { TodoItemType } from "../../redux/slices/todo/types";
import { useValidateFields } from "../AddTodoContainer/hooks/useValidateFields";
import { FormContainer, FormActions } from "./EditTodoContainer.style";
interface EditTodoContainerProps {
  id: string;
}

const EditTodoContainer: React.FC<EditTodoContainerProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const todo = useSelector((state: RootState) =>
    state.todo.todos.find((todo) => id === todo.id)
  );

  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const loading = useSelector(
    (state: RootState) => state.todo.loading.updateTodo
  );
  const error = useSelector((state: RootState) => state.todo.error);
  const { fieldErrors, validateFields } = useValidateFields();

  const {
    title: initialTitle = "",
    description: initialDescription = "",
    dueDate: initialDueDate = "",
    category: initialCategoryId = "",
  } = todo || {};

  const initialCategory = categories.find(
    (cat) => cat.id === initialCategoryId
  )?.id;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [category, setCategory] = useState(initialCategory || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidateFields()) {
      return;
    }
    const updatedTodo: TodoItemType = {
      ...todo!,
      title,
      description,
      dueDate,
      category,
    };
    await dispatch(updateTodoThunk(updatedTodo));

    if (!error) {
      handleCloseModal();
    }
  };

  const handleDelete = async () => {
    if (todo) {
      await dispatch(deleteTodoThunk(todo.id));

      if (!error) {
        handleCloseModal();
      }
    }
  };

  const handleValidateFields = () => {
    const fields = {
      title,
      description,
      dueDate,
      category,
    };

    if (!validateFields(fields)) {
      return false;
    }
    return true;
  };

  const handleCloseModal = () => {
    dispatch(closeModal(`editTodo-${id}`));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        error={fieldErrors.title}
      />
      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
        error={fieldErrors.description}
      />
      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        error={fieldErrors.dueDate}
      />
      <Dropdown
        label="Category"
        options={categories.map((option) => ({
          value: option.id,
          label: option.name,
        }))}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Select a category"
        error={fieldErrors.category}
      />
      <FormActions>
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          loading={loading}
          content="Save"
        />
        <Button
          type="button"
          variant="danger"
          disabled={loading}
          loading={loading}
          content={<Icon icon={faTrash} size="lg" />}
          onClick={handleDelete}
        />
      </FormActions>
    </FormContainer>
  );
};

export default EditTodoContainer;

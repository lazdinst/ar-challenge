import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { fetchCategoriesThunk } from "../../redux/slices/category";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useValidateFields } from "./hooks/useValidateFields";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import { FormWrapper, FieldWrapper } from "./AddTodoContainer.style";

const AddTodoContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const loading = useAppSelector((state) => state.todo.loading.createTodo);
  const error = useAppSelector((state) => state.todo.error);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDueDate("");
    setCategory("");
  };

  const { fieldErrors, validateFields } = useValidateFields();
  const { handleSubmit } = useHandleSubmit({ validateFields, resetForm });

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  return (
    <FormWrapper
      onSubmit={(e) => {
        handleSubmit(e, { title, description, dueDate, category });
      }}
    >
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
      <FieldWrapper>
        <Input
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          error={fieldErrors.dueDate}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Dropdown
          label="Due Date"
          options={categories.map((cat) => ({
            value: cat.id,
            label: cat.name,
          }))}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select a category"
          error={fieldErrors.category}
        />
      </FieldWrapper>
      <Button
        type="submit"
        disabled={loading}
        loading={loading}
        content="Add Todo"
      />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </FormWrapper>
  );
};

export default AddTodoContainer;

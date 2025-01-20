import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { fetchCategoriesThunk } from "../../redux/slices/category";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useValidateFields } from "./hooks/useValidateFields";
import { useHandleSubmit } from "./hooks/useHandleSubmit";

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
    <form
      onSubmit={(e) => {
        handleSubmit(e, { title, description, dueDate, category });
      }}
    >
      <h2>Add New Todo</h2>
      <Input
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        error={fieldErrors.title}
      />
      {fieldErrors.title && <p style={{ color: "red" }}>Title is required</p>}

      <Input
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter todo description"
        error={fieldErrors.description}
      />
      {fieldErrors.description && (
        <p style={{ color: "red" }}>Description is required</p>
      )}

      <Input
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        error={fieldErrors.dueDate}
      />
      {fieldErrors.dueDate && (
        <p style={{ color: "red" }}>Due Date is required</p>
      )}

      <Dropdown
        options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Select a category"
        error={fieldErrors.category}
      />
      {fieldErrors.category && (
        <p style={{ color: "red" }}>Category is required</p>
      )}

      <Button
        type="submit"
        disabled={loading}
        loading={loading}
        content="Add Todo"
      />
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </form>
  );
};

export default AddTodoContainer;

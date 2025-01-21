import React, { useState } from "react";
import { useAppSelector } from "../../redux/store";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";
import { useValidateFields } from "./hooks/useValidateFields";
import { useHandleSubmit } from "./hooks/useHandleSubmit";
import {
  FormWrapper,
  FieldWrapper,
  ButtonWrapper,
} from "./AddTodoContainer.style";

const AddTodoContainer: React.FC = () => {
  const categories = useAppSelector((state) => state.category.categories);
  const loading = useAppSelector((state) => state.todo.loading.createTodo);

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

  return (
    <FormWrapper
      onSubmit={(e) => {
        handleSubmit(e, { title, description, dueDate, category });
      }}
    >
      <FieldWrapper>
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
          error={fieldErrors.title}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter todo description"
          error={fieldErrors.description}
        />
      </FieldWrapper>
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
          label="Category"
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
      <ButtonWrapper>
        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          content="Add Todo"
        />
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default AddTodoContainer;

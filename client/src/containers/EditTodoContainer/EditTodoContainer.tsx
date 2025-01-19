import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { updateTodoThunk } from "../../redux/slices/todo";
import { closeModal } from "../../redux/slices/ui";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import { TodoItem } from "../../redux/slices/todo/types";

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
  const loading = useSelector((state: RootState) => state.todo.loading);
  const error = useSelector((state: RootState) => state.todo.error);

  const {
    title: initialTitle = "",
    description: initialDescription = "",
    dueDate: initialDueDate = "",
    category: initialCategoryName = "",
  } = todo || {};

  const initialCategory = categories.find(
    (cat) => cat.name === initialCategoryName
  )?.id;

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [category, setCategory] = useState(initialCategory || "");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !dueDate || !category) {
      alert("All fields are required!");
      return;
    }

    const updatedTodo: TodoItem = {
      ...todo!,
      title,
      description,
      dueDate,
      category,
    };

    await dispatch(updateTodoThunk(updatedTodo));

    if (!error) {
      dispatch(closeModal(`editTodo-${id}`));
    }
  };

  return (
    <>
      <h2>Edit Todo</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter todo description"
        />
        <Input
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <Dropdown
          options={categories.map((option) => ({
            value: option.id,
            label: option.name,
          }))}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Select a category"
        />
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Updating..." : "Update Todo"}
        </Button>
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
      </form>
    </>
  );
};

export default EditTodoContainer;

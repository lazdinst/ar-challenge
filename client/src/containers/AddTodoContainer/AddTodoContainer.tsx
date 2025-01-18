import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { fetchCategoriesThunk } from "../../redux/slices/category";
import { createTodoThunk } from "../../redux/slices/todo";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
import Button from "../../components/Button/Button";

const AddTodoContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const loading = useSelector((state: RootState) => state.todo.loading);
  const error = useSelector((state: RootState) => state.todo.error);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !dueDate || !category) {
      alert("All fields are required!");
      return;
    }

    dispatch(
      createTodoThunk({
        id: "",
        title,
        description,
        dueDate,
        category,
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
    );

    setTitle("");
    setDescription("");
    setDueDate("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Todo</h2>
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
        options={categories.map((cat) => ({ value: cat.id, label: cat.name }))}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Select a category"
      />
      <Button type="submit" onClick={() => {}} disabled={loading}>
        {loading ? "Adding..." : "Add Todo"}
      </Button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </form>
  );
};

export default AddTodoContainer;

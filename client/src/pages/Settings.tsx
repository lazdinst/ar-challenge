import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import {
  deleteCategoryThunk,
  updateCategoryThunk,
  createCategoryThunk,
  fetchCategoriesThunk,
} from "../redux/slices/category";
import Input from "../components/Input";
import Button from "../components/Button";

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const loading = useSelector((state: RootState) => state.category.loading);
  const error = useSelector((state: RootState) => state.category.error);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryColor, setNewCategoryColor] = useState("#000000");

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newCategoryName.trim()) {
      alert("Category name is required");
      return;
    }

    dispatch(
      createCategoryThunk({
        name: newCategoryName.trim(),
        color: newCategoryColor,
      })
    );

    setNewCategoryName("");
    setNewCategoryColor("#000000");
  };

  const handleDeleteCategory = (id: string) => {
    dispatch(deleteCategoryThunk(id));
  };

  const handleEditCategory = (
    id: string,
    updatedName: string,
    updatedColor: string
  ) => {
    dispatch(
      updateCategoryThunk({
        id,
        name: updatedName,
        color: updatedColor,
      })
    );
  };

  return (
    <div>
      <h1>Manage Categories</h1>
      <form onSubmit={handleAddCategory}>
        <Input
          label="Category Name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
          placeholder="Enter category name"
        />
        <Input
          label="Category Color"
          type="color"
          value={newCategoryColor}
          onChange={(e) => setNewCategoryColor(e.target.value)}
        />
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <span style={{ color: category.color }}>{category.name}</span>
            <Button
              onClick={() =>
                handleEditCategory(
                  category.id,
                  prompt("New name", category.name) || category.name,
                  category.color || "#000"
                )
              }
              variant="secondary"
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteCategory(category.id)}
              variant="danger"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Settings;

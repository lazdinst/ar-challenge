import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { createCategoryThunk } from "../../redux/slices/category";
import { Input, Button } from "../../components";
import { CategoryCreateWrapper } from "./CreateCategoryContainer.style";

const CategoryCreateContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.category.categories);
  const apiError = useAppSelector((state) => state.category.error); // Redux state error

  const [categoryName, setCategoryName] = useState("");
  const [categoryColor, setCategoryColor] = useState("#000000");
  const [error, setError] = useState<string | null>(null);

  const validateCategory = (name: string): string | null => {
    if (!name.trim()) {
      return "Category name is required.";
    }
    if (
      categories.some(
        (cat) => cat.name.toLowerCase() === name.trim().toLowerCase()
      )
    ) {
      return "Category already exists.";
    }
    return null;
  };

  const handleCreateCategory = async () => {
    const validationError = validateCategory(categoryName);
    if (validationError) {
      setError(validationError);
      return;
    }
    try {
      await dispatch(
        createCategoryThunk({ name: categoryName.trim(), color: categoryColor })
      ).unwrap();
      setCategoryName("");
      setCategoryColor("#000000");
      setError(null);
    } catch (e) {
      console.error(e);
      setError("Failed to create category.");
    }
  };

  return (
    <CategoryCreateWrapper $error={!!error || !!apiError}>
      <Input
        value={categoryName}
        onChange={(e) => {
          setCategoryName(e.target.value);
          setError(null);
        }}
        placeholder="New Category Name"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {apiError && !error && <p style={{ color: "red" }}>{apiError}</p>}
      <Button onClick={handleCreateCategory}>Add</Button>
    </CategoryCreateWrapper>
  );
};

export default CategoryCreateContainer;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { updateCategoryThunk } from "../../redux/slices/category";
import Input from "../../components/Input";
import { useDebounce } from "../../hooks";
import { CategoryInputWrapper } from "./CategoryEditContainer.style";
import { Button, Icon } from "../../components";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface CategoryEditContainerProps {
  id: string;
}

const CategoryEditContainer: React.FC<CategoryEditContainerProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  const getCategoryNameById = (id: string) => {
    const category = categories.find((cat) => cat.id === id);
    return category ? category.name : "Unknown Category";
  };

  const [newCategoryName, setNewCategoryName] = useState(
    getCategoryNameById(id)
  );
  const [error, setError] = useState(false);

  const { debounce, cancel } = useDebounce((updatedName: string) => {
    dispatch(
      updateCategoryThunk({
        id,
        name: updatedName,
        color: "#000000",
      })
    );
  }, 500);

  const handleCategoryNameChange = (value: string) => {
    setNewCategoryName(value);

    if (!value.trim()) {
      setError(true);
      cancel();
      return;
    }

    setError(false);
    debounce(value);
  };

  const handleBlur = () => {
    cancel();
    if (!newCategoryName.trim()) {
      setError(true);
      return;
    }

    setError(false);
    if (newCategoryName !== getCategoryNameById(id)) {
      dispatch(
        updateCategoryThunk({
          id,
          name: newCategoryName,
          color: "#000000",
        })
      );
    }
  };

  return (
    <CategoryInputWrapper $error={error}>
      <Input
        value={newCategoryName}
        onChange={(e) => handleCategoryNameChange(e.target.value)}
        onBlur={handleBlur}
        placeholder="Enter category name"
        error={error}
      />
      <Button
        onClick={() => {}}
        disabled={error}
        variant="danger"
        content={<Icon icon={faTrash} />}
      />
    </CategoryInputWrapper>
  );
};

export default CategoryEditContainer;

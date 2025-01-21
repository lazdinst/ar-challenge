import { v4 as uuidv4 } from "uuid";
import { Request, Response } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/category.service";

import {
  Category,
  CategoryRequestBody,
  APIParams,
  DeleteCategoryResponse,
  ErrorResponse,
} from "../definitions";

export const getCategoriesController = (req: Request, res: Response): void => {
  const categories = getCategories();
  res.status(200).json(categories);
  return;
};

export const createCategoryController = (req: Request, res: Response): void => {
  const { name, color } = req.body;
  if (!name) {
    const error: ErrorResponse = { error: true, message: "Name is required" };
    res.status(400).json(error);
    return;
  }

  const newCategory: Category = {
    id: uuidv4(),
    name,
    color,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const category = createCategory(newCategory);
  res.status(201).json(category);
  return;
};

export const updateCategoryController = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updates = req.body;
  if (!id) {
    const error = { error: true, message: "Id parameter is required" };
    res.status(400).json(error);
    return;
  }

  const updatedCategory = updateCategory(id, updates);

  if (!updatedCategory) {
    const error = { error: true, message: "Category update failure" };
    res.status(404).json(error);
    return;
  }

  res.status(200).json(updatedCategory);
  return;
};

export const deleteCategoryController = (req: Request, res: Response): void => {
  const { id } = req.params;

  if (!id) {
    const error = { error: true, message: "Id parameter is required" };
    res.status(400).json(error);
    return;
  }

  const success = deleteCategory(id);

  if (!success) {
    const error: ErrorResponse = {
      error: true,
      message: "Category deletion failed",
    };
    res.status(404).json(error);
    return;
  }

  res.status(200).json();
  return;
};

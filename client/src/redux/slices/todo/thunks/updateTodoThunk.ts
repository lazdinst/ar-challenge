import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItemType } from "../types";

export const updateTodoThunk = createAsyncThunk(
  "todo/updateTodo",
  async (updatedTodo: TodoItemType) => {
    const response = await axios.put<TodoItemType>(
      `http://localhost:5000/api/todos/${updatedTodo.id}`,
      updatedTodo
    );
    return response.data;
  }
);

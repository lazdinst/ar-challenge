import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItem } from "../types";

export const updateTodoThunk = createAsyncThunk(
  "todo/updateTodo",
  async (updatedTodo: TodoItem) => {
    const response = await axios.put<TodoItem>(
      `http://localhost:5000/api/todos/${updatedTodo.id}`,
      updatedTodo
    );
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItem } from "../types";

export const createTodoThunk = createAsyncThunk(
  "todo/createTodo",
  async (newTodo: TodoItem) => {
    const response = await axios.post<TodoItem>("/api/todos", newTodo);
    return response.data;
  }
);

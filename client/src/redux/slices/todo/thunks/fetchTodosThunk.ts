import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItem } from "../types";

export const fetchTodosThunk = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get<TodoItem[]>(
    "http://localhost:5000/api/todos"
  );
  return response.data;
});

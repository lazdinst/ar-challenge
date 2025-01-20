import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItemType } from "../types";

export const fetchTodosThunk = createAsyncThunk("todo/fetchTodos", async () => {
  const response = await axios.get<TodoItemType[]>(
    "http://localhost:5000/api/todos"
  );
  return response.data;
});

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TodoItemType } from "../types";

export const createTodoThunk = createAsyncThunk(
  "todo/createTodo",
  async (newTodo: TodoItemType) => {
    const response = await axios.post<TodoItemType>(
      "http://localhost:5000/api/todos",
      newTodo
    );
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteTodoThunk = createAsyncThunk(
  "todo/deleteTodo",
  async (id: string) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    return id;
  }
);

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setTodoStatus } = todoSlice.actions;

export default todoSlice.reducer;

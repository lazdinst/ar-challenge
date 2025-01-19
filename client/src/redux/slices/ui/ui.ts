import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initial";

const ui = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state.modals[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state.modals[action.payload] = false;
    },
  },
});

export const { openModal, closeModal } = ui.actions;

export default ui.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ServerStatusState } from "./types";
import { fetchServerStatus } from "./thunks";

const initialState: ServerStatusState = {
  alive: false,
  error: null,
  loading: false,
  status: null,
};

const server = createSlice({
  name: "server",
  initialState,
  reducers: {
    setServerAlive: (state, action) => {
      state.alive = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServerStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServerStatus.fulfilled, (state, action) => {
        state.alive = true;
        state.error = null;
        state.loading = false;
        state.status = action.payload.status;
      })
      .addCase(fetchServerStatus.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.loading = false;
      });
  },
});

export type { ServerStatusState };
export const { setServerAlive, setError, clearError } = server.actions;
export default server.reducer;

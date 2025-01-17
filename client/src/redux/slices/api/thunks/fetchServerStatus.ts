import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ServerStatusResponse } from "../types";
const HOST = import.meta.env.VITE_SERVER_HOST || "localhost";
const PORT = import.meta.env.VITE_SERVER_PORT || 5000;
const uri = `http://${HOST}:${PORT}/api`;

export const fetchServerStatus = createAsyncThunk<ServerStatusResponse, void>(
  "server/fetchServerStatus",
  async () => {
    const statusURI = `${uri}/status`;
    const response = await axios.get<ServerStatusResponse>(statusURI);
    return response.data;
  }
);

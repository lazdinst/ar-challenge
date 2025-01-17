import express from "express";
import { todoRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use("/api/todos", todoRoutes);

export default app;

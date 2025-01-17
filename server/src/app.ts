import express from "express";
import { todoRoutes, categoryRoutes } from "./routes";
import { errorHandler } from "./utils";

const app = express();
app.use(express.json());
app.get("/status", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

app.use("/api/todos", todoRoutes);
app.use("/api/categories", categoryRoutes);
app.use(errorHandler);

export default app;

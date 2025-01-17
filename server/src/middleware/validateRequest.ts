import { Request, Response, NextFunction } from "express";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.title || !req.body.description) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  next();
};

import { Router } from "express";
import authRoutes from "../routes/auth.routes";

const router = Router();

router.use("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

router.use("/auth", authRoutes);

export default router;

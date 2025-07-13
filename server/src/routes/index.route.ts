import { Router } from "express";

const router = Router();

router.use("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});


export default router;

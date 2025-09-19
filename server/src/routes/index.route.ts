import { Router } from "express";
import text_sample_routes from "./text-sample.routes"

const router = Router();

router.use("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

router.use("/text-sample", text_sample_routes)


export default router;

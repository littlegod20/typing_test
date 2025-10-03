import { Router } from "express";
import text_sample_routes from "./text_sample.routes"
import course_routes from "./course.routes"
import lesson_routes from "./lesson.routes"
import badge_routes from "./badge.routes"
import user_setting_routes from "./user_settings.routes"

const router = Router();

router.use("/health", (_req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
  });
});

router.use("/text-samples", text_sample_routes)

router.use('/courses', course_routes)

router.use('/lessons', lesson_routes)

router.use('/badges', badge_routes)

router.use('/user_setting', user_setting_routes)

export default router;

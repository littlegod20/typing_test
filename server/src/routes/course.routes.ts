import { Router } from "express";
import { addCourse, deleteCourse, getAllCourses, getCourseById, updateCourse } from "../controllers/course.controller";

const router = Router()


router.get('/', getAllCourses)

router.get("/:id", getCourseById)

router.post('/', addCourse)

router.patch('/:id', updateCourse)

router.delete('/:id', deleteCourse)


export default router
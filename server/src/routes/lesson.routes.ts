
import { Router } from "express";
import { addLesson, deleteLesson, getLessons, getLessonById, updateLesson } from "../controllers/lesson.controller";
import { validateDto } from "../middleware/validationDto.middleware";
import { CreateLessonDto } from "../dto/lesson.dto";

const router = Router()

router.get('/', getLessons)
router.get('/:id', getLessonById)

router.post('/', validateDto(CreateLessonDto), addLesson)

router.patch('/:id', updateLesson)

router.delete('/:id', deleteLesson)


export default router
import { Request, Response } from "express";
import { AppDataSource } from "../config/database.config";
import { Lesson } from "../entities/lesson.entity";
import { LessonService } from "../services/lesson.service";
import logger from "../config/logger";
import { Course } from "../entities/course.entity";
import { TextSample } from "../entities/text_sample.entity";

const lessonRepository = AppDataSource.getRepository(Lesson)
const courseRepository = AppDataSource.getRepository(Course)
const textSampleRepository = AppDataSource.getRepository(TextSample)

const lessonService = new LessonService(lessonRepository, courseRepository, textSampleRepository)


export const getLessons = async (req: Request, res: Response) => {
  logger.info("Getting Lessons....")
  try {
    const { courseId } = req.query
    console.log("from all Lessons:::", courseId)
    const lesson = await lessonService.findAllLessons(courseId?.toString())

    res
      .status(200)
      .json({
        success: true,
        message: "lessons retrieved successfully!",
        data: lesson
      })

  } catch (error) {
    logger.error(`Failed to retrieve lesson: ${error}`)
    res
      .json({
        success: false,
        message: `Failed to retrieve lessons: ${error}`
      })
  }
}

export const getLessonById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id) {
      res
        .status(400)
        .json({
          success: false,
          message: "No id in params"
        })
      return
    }

    const lesson = await lessonService.findLessonById(id)

    res.status(200).json({ success: true, message: "Successfully retrieved lesson", data: lesson })
  } catch (error) {
    logger.error(`Failed to retrieve lesson:`, error)
    res.json({ success: false, message: `Failed to retrieve lesson: ${error}` })
  }
}

export const addLesson = async (req: Request, res: Response) => {
  try {

    const lesson = await lessonService.add(req.body)

    res.status(201).json({ success: true, message: "New lesson added successfully!", data: lesson })

  } catch (error) {
    logger.error(`Failed to add new lesson: ${error}`)
    res.json({ success: false, message: `Failed to add new lesson: ${error}` })
  }
}

export const updateLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const lessonToUpdate = req.body
    const findLesson = await lessonService.findLessonById(id)

    if (!findLesson) {
      res.status(404).json({ success: false, message: `No lesson found with ID: ${id}` })
      return
    }
    const updatedlesson = await lessonService.update(id, lessonToUpdate)

    res.status(201).json({ success: true, message: "lesson updated successfully", data: updatedlesson })

  } catch (error) {
    logger.error(`Failed to updated lesson: ${error}`)
    res.status(500).json({ success: false, message: `Failed to updated lesson: ${error}` })
  }

}

export const deleteLesson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const findLesson = await lessonService.findLessonById(id)

    if (!findLesson) {
      res.status(404).json({ success: false, message: `No lesson found with ID: ${id}` })
      return
    }

    await lessonService.delete(id)

    res.status(201).json({ success: true, message: `lesson with name '${findLesson.title}' deleted successfully` })
  } catch (error) {
    logger.error(`Failed to deleted lesson: ${error}`)
    res.status(500).json({ success: false, message: `Failed to deleted lesson: ${error}` })
  }
}
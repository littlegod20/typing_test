import { Request, Response } from "express"
import { AppDataSource } from "../config/database.config"
import logger from "../config/logger"
import { Course } from "../entities/course.entity"
import { CourseService } from "../services/course.service"


const courseRepository = AppDataSource.getRepository(Course)
const courseService = new CourseService(courseRepository)


export const getAllCourses = async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses()

    res.status(200).json({ success: true, message: "Courses retrieved successfully!", data: courses })

  } catch (error) {
    logger.error(`Failed to retrieve courses: ${error}`)
    res.json({ success: false, message: error })
  }
}

export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const course = await courseService.findCourseById(id)

    res.status(200).json({ success: true, message: "Successfully retrieved course", data: course })
  } catch (error) {
    logger.error(`Failed to retrieve course:`, error)
    res.json({ success: false, message: "Failed to retrieve course" })
  }
}

export const addCourse = async (req: Request, res: Response) => {
  try {

    const course = await courseService.addCourse(req.body)

    res.status(201).json({ success: true, message: "New course added successfully!", data: course })

  } catch (error) {
    logger.error(`Failed to add new course: ${error}`)
    res.status(400).json({ success: false, message: `Failed to add new course: ${error}` })
  }
}

export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const courseToUpdate = req.body
    const findCourse = await courseService.findCourseById(id)

    if (!findCourse) {
      res.status(404).json({ success: false, message: `No course found with ID: ${id}` })
      return
    }
    const updatedCourse = await courseService.udpateCourse(id, courseToUpdate)

    res.status(201).json({ success: true, message: "Course updated successfully", data: updatedCourse })

  } catch (error) {
    logger.error(`Failed to updated course: ${error}`)
    res.status(500).json({ success: false, message: `Failed to updated course: ${error}` })
  }

}

export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const findCourse = await courseService.findCourseById(id)

    if (!findCourse) {
      res.status(404).json({ success: false, message: `No course found with ID: ${id}` })
      return
    }

    await courseService.deleteCourse(id)

    res.status(201).json({ success: true, message: `Course with name '${findCourse.name}' deleted successfully` })
  } catch (error) {
    logger.error(`Failed to deleted course: ${error}`)
    res.status(500).json({ success: false, message: `Failed to deleted course: ${error}` })
  }
}
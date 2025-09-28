import { Repository } from "typeorm";
import { AppDataSource } from "../config/database.config";
import { Course } from "../entities/course.entity";
import { CourseDto } from "../dto/course.dto";


export class CourseService {
  constructor(private readonly courseRepository: Repository<Course>) { }

  async getAllCourses() {
    const allCourses = await this.courseRepository.find()
    return allCourses;
  }

  async findCourseById(id: string) {
    const course = await this.courseRepository.findOne({ where: { id: id } })
    return course
  }

  async addCourse(course: CourseDto) {
    const newCourse = this.courseRepository.create(course)
    return await this.courseRepository.save(newCourse)
  }

  async udpateCourse(id: string, course: Partial<CourseDto>) {
    await this.courseRepository.update(
      {
        id: id
      },
      {
        name: course.name,
        description: course.description
      }
    )
    return await this.courseRepository.findOne({ where: { id } })
  }


  async deleteCourse(id: string) {
    const deletedCourse = await this.courseRepository.softDelete(id)
    return deletedCourse
  }
}
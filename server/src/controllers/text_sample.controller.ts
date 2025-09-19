import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../config/database.config";
import { TextSample } from "../entities/text_sample.entity";
import { TextSampleService } from "../services/text_sample.service";
import logger from "../config/logger";

const textSampleRepository = AppDataSource.getRepository(TextSample)
const textSampleService = new TextSampleService(textSampleRepository)


export const getTextSamples = async (req: Request, res: Response) => {
  try {
    const allTextSamples = await textSampleService.findTextSamples()

    res.status(200).json({ success: true, message: "Retrieved all text samples successfully", data: allTextSamples })

  } catch (error) {
    logger.error(`Error retrieving text samples:`, error)
    res.json({ success: false, message: "Failed to retrieve all text samples" })
  }

}

export const getTextSampleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const sample = await textSampleService.findTextSampleById(id)

    res.status(200).json({ success: true, message: "Successfully retrieved text sample", data: sample })
  } catch (error) {
    logger.error(`Failed to retrieve text sample:`, error)
    res.status(404).json({ success: false, message: "Failed to retrieve text sample" })
  }
}

export const postTextSample = async (req: Request, res: Response) => {
  try {
    const { content, title, category, difficulty_level, language, source } = req.body;

    const data = {
      content,
      title,
      category,
      difficulty_level,
      language,
      source
    }

    // saving data in the database
    const textSample = await textSampleService.add(data)

    res.status(201).json({ success: true, message: "New text sample added successfully!", data: textSample })

  } catch (error) {
    logger.error("Error adding new text sample:", error instanceof Error ? error.message : String(error))
    res.json({ success: false, message: error instanceof Error ? error.message : String(error) })
  }
}

// updating a textsample
export const updatedTextSample = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const sampleToUpdate = req.body

    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const updatedSample = await textSampleService.update(id, sampleToUpdate)

    if (!updatedSample) {
      res.status(404).json({ success: false, message: `No sample matching ID: ${id} found in db.` })
      return
    }

    res.status(200).json({ success: true, message: `Sample with id ${id} updated successfully!`, data: updatedSample })

  } catch (error) {
    logger.error("Error updating text sample:", error instanceof Error ? error.message : String(error))
    res.json({ success: false, message: error instanceof Error ? error.message : String(error) })
  }
}


// removing a textsample
export const deleteTextSample = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const findSample = await textSampleService.findTextSampleById(id)
    if (!findSample) {
      res.status(404).json({ success: false, message: `No text sample matching ID: ${id} found in db.` })
      return
    }

    await textSampleService.delete(id)

    res.status(200).json({ success: true, message: `Text sample '${findSample[0].title}' has been deleted successfully` })

  } catch (error) {
    logger.error("Error deleting text sample:", error instanceof Error ? error.message : String(error))

    res.status(400).json({ success: false, message: error instanceof Error ? error.message : String(error) })
  }
}
import { Request, Response } from "express"
import { AppDataSource } from "../config/database.config"
import { UserSettings } from "../entities/user_settings.entity"
import { UserSettingsService } from "../services/user_settings.service"
import logger from "../config/logger"

const userSettingRepo = AppDataSource.getRepository(UserSettings)
const userSettingService = new UserSettingsService(userSettingRepo)

export const getUserSettingById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const userSetting = await userSettingService.getById(id)
    res.status(200).json({ success: true, message: "Fetched user setting successfully!", data: userSetting })

  } catch (error) {
    logger.error(`Failed to fetch user settings by id: ${error}`)
    res.json({ success: false, message: `Failed to fetch user settings by id: ${error}` })
  }
}

export const getAllUserSettings = async (req: Request, res: Response) => {
  try {
    const usersSetting = await userSettingService.getAll()
    res.status(200).json({ success: true, message: "Fetched all users' settings successfully!", data: usersSetting })

  } catch (error) {
    logger.error(`Failed to fetch all users' settings by id: ${error}`)
    res.json({ success: false, message: `Failed to fetch all user's settings: ${error}` })
  }
}

export const createUserSetting = async (req: Request, res: Response) => {
  const userSetting = req.body
  try {
    const createdSetting = await userSettingService.create(userSetting)
    res.status(200).json({ success: true, message: "Created a setting successfully", data: createdSetting })

  } catch (error) {
    logger.error(`Failed to create setting: ${error}`)
    res.json({ success: false, message: `Failed to create setting: ${error}` })
  }
}

export const updateUserSetting = async (req: Request, res: Response) => {
  const { id } = req.params
  const userSetting = req.body
  try {
    const updatedSetting = await userSettingService.update(id, userSetting)
    res.status(200).json({ success: true, message: "Updated a setting successfully", data: updatedSetting })

  } catch (error) {
    logger.error(`Failed to update setting: ${error}`)
    res.json({ success: false, message: `Failed to update setting: ${error}` })
  }
}

export const resetUserSetting = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    if (!id) {
      logger.error("user id not found in params")
      res.status(400).json({ success: false, message: "User Id must exist in params!" })
      return
    }

    const resettedUserSetting = await userSettingService.reset(id)
    res.status(200).json({ success: true, message: "Created a setting successfully", data: resettedUserSetting })

  } catch (error) {
    logger.error(`Failed to reset user setting: ${error}`)
    res.json({ success: false, message: `Failed to reset user setting: ${error}` })
  }
}
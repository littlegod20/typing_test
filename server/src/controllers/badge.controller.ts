import { Request, Response } from "express"
import logger from "../config/logger"
import { AppDataSource } from "../config/database.config"
import { Badge } from "../entities/badge.entity"
import { BadgeService } from "../services/badge.service"

const badgeRepository = AppDataSource.getRepository(Badge)
const badgeService = new BadgeService(badgeRepository)

export const getBadges = async (req: Request, res: Response) => {
  try {
    logger.info("Fetching all badges...")
    const allBadges = await badgeService.fetchBadges()

    res.status(200).json({
      success: true,
      message: "Badges fetched successfully!",
      data: allBadges
    })
  } catch (error) {
    logger.error(`Failed to fetch badges: ${error}`)
    res.json({ success: false, message: `Failed to fetch badges: ${error}` })
  }
}

export const getBadgeById = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    logger.info("Fetching a badges...")
    const badge = await badgeService.fetchBadgeById(id)

    if (!badge) {
      res.status(404).json({ success: false, message: "Badge was not found!" })
      return
    }

    res.status(200).json({
      success: true,
      message: "Badge fetched successfully!",
      data: badge
    })
  } catch (error) {
    logger.error(`Failed to fetch badge: ${error}`)
    res.json({ success: false, message: `Failed to fetch badge: ${error}` })
  }
}

export const createBadge = async (req: Request, res: Response) => {
  const badgeData = req.body
  try {
    const badge = await badgeService.createBadgeWithIcon(badgeData)
    res.status(201).json({ success: true, message: "New badge added successfully!", data: badge })
  } catch (error) {
    logger.error(`Failed to create new badge: ${error}`)
    res.json({ success: false, message: `Failed to create new badge: ${error}` })
  }
}


export const updateBadgeData = async (req: Request, res: Response) => {
  const { id } = req.params
  const badgeData = req.body
  try {
    logger.info("Updating badge...")

    if (!id) {
      res.status(400).json({ success: false, message: "No id in params" })
      return
    }

    const badge = await badgeService.updateBadge(id, badgeData)

    res.status(200).json({
      success: true,
      message: "Badge updated successfully!",
      data: badge
    })
  } catch (error) {
    logger.error(`Failed to update badge: ${error}`)
    res.json({ success: false, message: `Failed to update badge: ${error}` })
  }
}
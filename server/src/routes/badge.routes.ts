import { Router } from "express";
import logger from "../config/logger";
import { createBadge, getBadgeById, getBadges, updateBadgeData } from "../controllers/badge.controller";

const router = Router()

router.get('/', getBadges)
router.get('/:id', getBadgeById)
router.post('/', createBadge)
router.patch('/:id', updateBadgeData)



export default router
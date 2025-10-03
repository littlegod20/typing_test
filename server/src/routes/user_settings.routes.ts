import { Router } from "express";
import { createUserSetting, getAllUserSettings, getUserSettingById, resetUserSetting, updateUserSetting } from "../controllers/user_settings.controller";

const router = Router()

router.get('/', getAllUserSettings)
router.get("/:id", getUserSettingById)

router.patch('/:id', updateUserSetting)
router.post('/', createUserSetting)
router.put('/', resetUserSetting)

export default router
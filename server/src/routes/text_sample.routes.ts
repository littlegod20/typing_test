import { Router } from "express";
import { validateDto } from "../middleware/validationDto.middleware";
import { CreateTextSampleDto } from "../dto/text_sample.dto";
import { AppDataSource } from "../config/database.config";
import { deleteTextSample, getTextSampleById, getTextSamples, postTextSample, updatedTextSample } from "../controllers/text_sample.controller";



const router = Router()

router.get('/', getTextSamples)

router.get('/:id', getTextSampleById)

router.post('/', validateDto(CreateTextSampleDto), postTextSample)

router.patch('/:id', updatedTextSample)

router.delete('/:id', deleteTextSample)



export default router
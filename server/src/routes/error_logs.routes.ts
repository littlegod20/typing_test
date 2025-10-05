import { Router } from 'express';
import type { Request, Response } from 'express';
import { createErrorLog, deleteAllUserErrorLogs, deleteErrorLog, getAllErrorLogs, getErrorLogById } from '../controllers/error_logs.controller';

const router = Router();

// Get all error logs
router.get('/', getAllErrorLogs);

// Get specific error log by ID
router.get('/:id', getErrorLogById);

// Create new error log
router.post('/', createErrorLog);

router.delete('/:id', deleteErrorLog)

router.delete('/', deleteAllUserErrorLogs)

export default router;
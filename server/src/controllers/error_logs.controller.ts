import { Request, Response } from 'express';
import { ErrorLog } from '../entities/error_log.entity';
import { AppDataSource } from '../config/database.config';
import { ErrorLogService } from '../services/error_logs.service';

const errorLogRepo = AppDataSource.getRepository(ErrorLog)
const errorLogService = new ErrorLogService(errorLogRepo)

export const getAllErrorLogs = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query
    const errorLogs = await errorLogService.findAll(userId?.toString());
    res.status(200).json({ success: true, message: "Successfully fetched all error logs", data: errorLogs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching error logs', error });
  }
}

// Get single error log by ID
export const getErrorLogById = async (req: Request, res: Response) => {
  try {
    const errorLog = await errorLogService.findById(req.params.id);
    if (!errorLog) {
      res.status(404).json({ success: false, message: 'Error log not found' });
      return;
    }
    res.status(200).json({ success: true, message: "Error logs fetched successfully!", data: errorLog });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching error log', error });
  }
}

// Create new error log
export const createErrorLog = async (req: Request, res: Response) => {
  try {
    const savedErrorLog = await errorLogService.create(req.body);
    res.status(201).json({ success: true, message: "Error log created successfully!", data: savedErrorLog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating error log', error });
  }
}

// Delete error log
export const deleteErrorLog = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      res.status(404).json({ success: false, message: 'Error log not found' });
      return;
    }
    const errorLog = await errorLogService.delete(req.params.id);
    res.status(200).json({ success: true, message: 'Error log deleted successfully', data: errorLog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting error log', error });
  }
}

// Delete all error logs
export const deleteAllUserErrorLogs = async (req: Request, res: Response) => {
  try {
    await errorLogService.clear();
    res.status(200).json({ success: true, message: 'All error logs deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting all error logs', error });
  }
}

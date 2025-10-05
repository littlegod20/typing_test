import { Repository } from 'typeorm';
import { ErrorLog } from '../entities/error_log.entity';
import { AppDataSource } from '../config/database.config';
import { User } from '../entities/user.entity';
import { TypingTest } from '../entities/typing_test.entity';

export class ErrorLogService {
  private userRepository = AppDataSource.getRepository(User)
  private typingTestRepository = AppDataSource.getRepository(TypingTest)
  constructor(
    private readonly errorLogRepository: Repository<ErrorLog>,
  ) { }

  async create(errorLog: ErrorLog): Promise<ErrorLog> {
    if (!errorLog.user?.id) {
      throw new Error("User id missing in error log dto")
    }
    if (!errorLog.typing_test?.id) {
      throw new Error('Typing test id missing in error log dto')
    }
    const user = await this.userRepository.findOne({ where: { id: errorLog.user.id } })
    const typingTest = await this.typingTestRepository.findOne({ where: { id: errorLog.typing_test.id } })

    if (!user) {
      throw new Error('User not found!')
    }
    if (!typingTest) {
      throw new Error("Typing test not found!")
    }

    const newErrorLog = this.errorLogRepository.create({ ...errorLog, user: user, typing_test: typingTest });
    return await this.errorLogRepository.save(newErrorLog);
  }

  async findAll(userId?: string): Promise<ErrorLog[]> {
    if (userId) {
      return await this.errorLogRepository.find({ where: { user: { id: userId } } });
    }
    return await this.errorLogRepository.find()
  }

  async findById(id: string): Promise<ErrorLog | null> {
    return await this.errorLogRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<void> {
    await this.errorLogRepository.delete(id);
  }

  async clear(): Promise<void> {
    await this.errorLogRepository.clear();
  }
}
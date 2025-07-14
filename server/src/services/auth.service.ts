import bcrypt from "bcrypt";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt.util";
import { CreateUserDto } from "../dto/user.dto";

export class AuthService {
  constructor(private readonly userRepository: Repository<User>) {}

  async register(user: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });

    //checking for existing user
    if (existingUser) throw new Error("User already exists");

    // hash password
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = this.userRepository.create({
      username: user.username,
      email: user.email,
      password: hashedPassword,
    });

    const savedUser = await this.userRepository.save(newUser);

    const { password: _, ...userWithoutPassword } = savedUser;

    return {
      user: userWithoutPassword,
    };
  }

  async login(user: User) {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    const { password: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, tokens: { accessToken, refreshToken } };
  }

  async refreshToken(user: User) {
    return generateRefreshToken(user);
  }
}

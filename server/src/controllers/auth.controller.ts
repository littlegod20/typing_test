import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { AppDataSource } from "../config/database.config";
import { User } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository(User);
const authService = new AuthService(userRepository);

export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password, username } = req.body;
    const { user } = await authService.register({
      username,
      email,
      password,
    });

    res.json({ user, redirect: "/api/auth/login" });
  } catch (error) {
    res.json({ msg: error instanceof Error ? error.message : String(error) });
  }
};

export const refreshController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tokens = await authService.refreshToken(req.user as User);
    res.json(tokens);
  } catch (err) {
    next(err);
  }
};

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const { email } = req.body;
    const oldUser = await userRepository.findOne({ where: { email } });
    if (!oldUser) {
      res
        .status(404)
        .json({ succes: false, msg: "No user with this credentials" });
      return;
    }
    const { user, tokens } = await authService.login(oldUser);

    res.json({ user, tokens });
  } catch (error) {
    res.json({ msg: error instanceof Error ? error.message : String(error) });
  }
};

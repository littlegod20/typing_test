import { Router } from "express";
import passport from "passport";
import {
  loginController,
  refreshController,
  registerController,
} from "../controllers/auth.controller";
import { validateDto } from "../middleware/validationDto.middleware";
import { CreateUserDto } from "../dto/user.dto";

const router = Router();

router.post("/register", validateDto(CreateUserDto), registerController);

router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local",
    { session: false },
    (err: any, user: any, info: any) => {
      if (err) return next(err);

      if (!user) {
        return res
          .status(400)
          .json({
            success: false,
            message: info?.message || "Authorization failed",
          });
      }

      req.user = user;
      return loginController(req, res, next);
    }
  )(req, res, next);
});

router.post(
  "/refresh",
  passport.authenticate("jwt", { session: false }),
  refreshController
);

export default router;

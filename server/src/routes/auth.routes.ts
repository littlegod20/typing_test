import { Router } from "express";
import passport from "passport";
import {
  loginController,
  refreshController,
  registerController,
} from "../controllers/auth.controller";

const router = Router();

router.post("/register", registerController);

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  loginController
);

router.post(
  "/refresh",
  passport.authenticate("jwt", { session: false }),
  refreshController
);

export default router;

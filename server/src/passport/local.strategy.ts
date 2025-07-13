import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { AppDataSource } from "../config/database.config";

const userRepository = AppDataSource.getRepository(User);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const user = await userRepository.findOne({ where: { email } });
        if (!user) return done(null, false, { message: "Incorrect email." });

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword)
          return done(null, false, { message: "Incorrect password." });

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

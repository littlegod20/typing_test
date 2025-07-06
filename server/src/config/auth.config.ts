import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { AppDataSource } from "./database.config";
import bcrypt from "bcrypt";
import { User } from "../entities/user.entity";

const userRepository = AppDataSource.getRepository(User);

// Local strategy for authentication
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
      } catch (error) {
        return done(error);
      }
    }
  )
);

// JWT strategy for token authentication
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET ?? "defaultSecret",
    },
    async (jwtPayload, done) => {
      try {
        const user = await userRepository.findOne({
          where: { id: jwtPayload.id },
        });
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        return done(error, false);
      }
    }
  )
);

import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { User } from "../entities/user.entity";
import * as bcrypt from "bcrypt";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { config } from "dotenv";
import { AppDataSource } from "./database.config";

config();

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

        return done(null, user); // signature for done() method : done(error, user, info)
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Jwt strategy

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET ?? "defaultSecret",
    },
    async (jwtPayload, done) => {
      console.log("jwtPayload:", jwtPayload);
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

import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { config } from "dotenv";
import { AppDataSource } from "../config/database.config";
import { User } from "../entities/user.entity";

config();

const userRepository = AppDataSource.getRepository(User);

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

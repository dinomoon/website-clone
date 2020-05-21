import passport from "passport";
import passportGithub from "passport-github";
import User from "./models/User";
import dotenv from "dotenv";
dotenv.config();
import { githubLoginCallback } from "./controllers/globalController";

passport.use(User.createStrategy());

passport.use(
  new passportGithub({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback",
  }),
  githubLoginCallback
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

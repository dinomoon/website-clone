import passport from "passport";
import passportGithub from "passport-github";
import passportFacebook from "passport-facebook";
import User from "./models/User";
import dotenv from "dotenv";
dotenv.config();
import {
  githubLoginCallback,
  facebookLoginCallback,
} from "./controllers/globalController";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(
  new passportGithub(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/github/callback",
    },
    githubLoginCallback
  )
);

passport.use(
  new passportFacebook(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`,
    },
    facebookLoginCallback
  )
);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

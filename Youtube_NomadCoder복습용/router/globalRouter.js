import express from "express";
import routes from "../routes";
import {
  home,
  search,
  getSignIn,
  postSignIn,
  getSignUp,
  postSignUp,
  logout,
  githubLogin,
  postGithubLogIn,
} from "../controllers/globalController";
import { onlyPublic, onlyPrivate } from "../localMiddleware";
import passport from "passport";
import { me } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signIn, onlyPublic, getSignIn);
globalRouter.post(routes.signIn, onlyPublic, postSignIn);

globalRouter.get(routes.signUp, onlyPublic, getSignUp);
globalRouter.post(routes.signUp, onlyPublic, postSignUp, postSignIn);

globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogIn
);
globalRouter.get(routes.me, onlyPrivate, me);

export default globalRouter;

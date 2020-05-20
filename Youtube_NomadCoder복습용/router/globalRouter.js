import express from "express";
import routes from "../routes";
import {
  home,
  search,
  getSignIn,
  postSignIn,
  getSignUp,
  postSignUp,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signIn, getSignIn);
globalRouter.post(routes.signIn, postSignIn);

globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp, postSignIn);

export default globalRouter;

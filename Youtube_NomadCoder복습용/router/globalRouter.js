import express from "express";
import routes from "../routes";
import {
  home,
  search,
  signIn,
  getSignUp,
  postSignUp,
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.signIn, signIn);
globalRouter.get(routes.signUp, getSignUp);
globalRouter.post(routes.signUp, postSignUp);

export default globalRouter;

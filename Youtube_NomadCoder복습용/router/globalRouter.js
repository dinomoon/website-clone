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
import { onlyPublic } from "../localMiddleware";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

globalRouter.get(routes.signIn, onlyPublic, getSignIn);
globalRouter.post(routes.signIn, onlyPublic, postSignIn);

globalRouter.get(routes.signUp, onlyPublic, getSignUp);
globalRouter.post(routes.signUp, onlyPublic, postSignUp, postSignIn);

export default globalRouter;

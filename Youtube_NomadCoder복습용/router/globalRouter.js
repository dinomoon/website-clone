import express from "express";
import routes from "../routes";
import { home, search, signIn, signUp } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.signIn, signIn);
globalRouter.get(routes.signUp, signUp);

export default globalRouter;

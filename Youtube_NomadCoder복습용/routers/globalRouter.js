import express from "express";
import routes from "../routes";
import { home, getJoin, postJoin, login, logout, search } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
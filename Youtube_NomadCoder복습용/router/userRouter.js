import express from "express";
import routes from "../routes";
import { profileEdit, changePassword } from "../controllers/userController";
import { onlyPrivate } from "../localMiddleware";

const userRouter = express.Router();

userRouter.get(routes.profileEdit(), onlyPrivate, profileEdit);
userRouter.get(routes.changePassword(), onlyPrivate, changePassword);

export default userRouter;

import express from "express";
import routes from "../routes";
import { profileEdit, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.profileEdit(), profileEdit);
userRouter.get(routes.changePassword(), changePassword);

export default userRouter;

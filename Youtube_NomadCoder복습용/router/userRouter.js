import express from "express";
import routes from "../routes";
import { userDetail, userEdit } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.userEdit, userEdit);

export default userRouter;

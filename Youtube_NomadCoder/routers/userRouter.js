import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();
userRouter.get(routes.users, users);
userRouter.get(routes.users, userDetail);
userRouter.get(routes.users, editProfile);
userRouter.get(routes.users, changePassword);

export default userRouter;
import express from "express";
import routes from "../routes";
import { users, userProfile, editProfile, changePassword } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userProfile(), userProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
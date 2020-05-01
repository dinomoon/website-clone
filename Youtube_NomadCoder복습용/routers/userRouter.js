const express = require("express");
const routes = require("../routes");
import { users, userProfile, editProfile, changePassword } from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userProfile, userProfile);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

module.exports = userRouter;
import express from "express";
import routes from "../routes";
import { videoDetail, videoEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;

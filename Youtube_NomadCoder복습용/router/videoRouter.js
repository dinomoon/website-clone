import express from "express";
import routes from "../routes";
import {
  videoDetail,
  videoEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";
import { multerMiddleware } from "../localMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, multerMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.videoEdit, videoEdit);

export default videoRouter;

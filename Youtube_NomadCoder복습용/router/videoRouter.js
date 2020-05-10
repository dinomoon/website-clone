import express from "express";
import routes from "../routes";
import {
  videoDetail,
  getVideoEdit,
  postVideoEdit,
  getUpload,
  postUpload,
  videoDelete,
} from "../controllers/videoController";
import { multerMiddleware } from "../localMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, multerMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), getVideoEdit);
videoRouter.post(routes.videoEdit(), postVideoEdit);

videoRouter.get(routes.videoDelete(), videoDelete);

export default videoRouter;

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
import { multerMiddleware, onlyPrivate } from "../localMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, multerMiddleware, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);

videoRouter.get(routes.videoEdit(), onlyPrivate, getVideoEdit);
videoRouter.post(routes.videoEdit(), onlyPrivate, postVideoEdit);

videoRouter.get(routes.videoDelete(), onlyPrivate, videoDelete);

export default videoRouter;

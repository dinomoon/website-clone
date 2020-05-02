import express from "express";
import routes from "../routes";

import { videos, getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

videoRouter.get(routes.getUpload, getUpload);
videoRouter.post(routes.postUpload, postUpload);

videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;
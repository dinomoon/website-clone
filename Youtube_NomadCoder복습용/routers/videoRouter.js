const express = require("express");
const routes = require("../routes");

import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

module.exports = videoRouter;
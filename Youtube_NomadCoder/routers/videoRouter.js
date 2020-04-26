import express from "express";
import routes from "../routes";
import { videoDetail, videos, upload, editDetail, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();
//videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editDetail, editDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
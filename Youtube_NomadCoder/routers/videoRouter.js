import express from "express";
import routes from "../routes";
import { videoDetail, videos, upload, editDetail, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videos, upload);
videoRouter.get(routes.videos, videoDetail);
videoRouter.get(routes.videos, editDetail);
videoRouter.get(routes.videos, deleteVideo);

export default videoRouter;
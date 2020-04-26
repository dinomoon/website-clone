import express from "express";
import routes from "../routes";
import { videoDetail, getUpload, postUpload, editDetail, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editDetail, editDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
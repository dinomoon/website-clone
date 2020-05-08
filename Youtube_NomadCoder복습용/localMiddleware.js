import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });

const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};

export const multerMiddleware = multerVideo.single("videoFile");
export default localMiddleware;

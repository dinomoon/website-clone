import routes from "./routes";
import multer from "multer"

const multerVideo = multer({ dest: "uploads/videos/" });

export const localMiddleware = (req, res, next) => {
  // 로컬에 추가하기
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  }
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
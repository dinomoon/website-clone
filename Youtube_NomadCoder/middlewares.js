import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  // 로컬에 추가하기
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes
  next();
};
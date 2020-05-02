import routes from "./routes";

const localVarMiddleware = (req, res, next) => {
  res.locals.siteName = 'MunTube';
  res.locals.routes = routes;
  res.locals.user = {
    id: 1234,
    isAuthenticated: true
  }
  next();
}

export default localVarMiddleware;
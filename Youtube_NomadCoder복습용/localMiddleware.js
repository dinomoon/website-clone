import routes from "./routes";

const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  next();
};

export default localMiddleware;

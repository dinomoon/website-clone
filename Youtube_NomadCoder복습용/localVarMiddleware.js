const routes = require("./routes");

const localVarMiddleware = (req, res, next) => {
  res.locals.siteName = 'MunTube';
  res.locals.routes = routes;
  next();
}

module.exports = localVarMiddleware;
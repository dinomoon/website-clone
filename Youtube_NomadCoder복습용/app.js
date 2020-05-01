const express = require("express");
const globalRouter = require("./routers/globalRouter");
const videoRouter = require("./routers/videoRouter");
const userRouter = require("./routers/userRouter");
const routes = require("./routes");
const localVarMiddleware = require("./localVarMiddleware");
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

const app = express();

app.set('view engine', 'pug');

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(localVarMiddleware);
app.get(routes.home, globalRouter);
app.get(routes.videos, videoRouter);
app.get(routes.users, userRouter);

module.exports = app;
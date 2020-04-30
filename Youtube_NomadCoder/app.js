//const express = require("express");
import express from "express"; //바벨 덕분에 가능!!
import morgan from "morgan";
import helmet from "helmet";
import cookieParesr from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads"));
app.use(cookieParesr());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
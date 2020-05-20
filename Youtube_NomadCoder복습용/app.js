import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./router/globalRouter";
import videoRouter from "./router/videoRouter";
import userRouter from "./router/userRouter";
import localMiddleware from "./localMiddleware";
import passport from "passport";
import "./passport";

const app = express();

app.set("view engine", "pug");

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware);

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

app.use(routes.home, globalRouter);
app.use(routes.videos, videoRouter);
app.use(routes.users, userRouter);

export default app;

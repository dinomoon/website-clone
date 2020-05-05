import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import routes from "./routes";
import globalRouter from "./router/globalRouter";

const app = express();

app.set("view engine", "pug");

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes.home, globalRouter);
// app.get(routes.videos, videoRouter);
// app.get(routes.users, userRouter);

export default app;

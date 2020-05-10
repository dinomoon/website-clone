import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect("mongodb://127.0.0.1:27017/MunTube", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = () => console.error.bind(console, "connection error:");

db.once("open", handleOpen);
db.on("error", handleError);

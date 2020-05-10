import app from "./app";
import "./db";

const PORT = 5000;
const handleListening = () => console.log("✅ Connected to localhost");

app.listen(PORT, handleListening);

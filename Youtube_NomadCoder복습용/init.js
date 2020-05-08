import app from "./app";

const PORT = 5000;
const handleListening = () => console.log("✅ Connected");

app.listen(PORT, handleListening);

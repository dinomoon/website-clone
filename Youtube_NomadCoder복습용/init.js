import app from "./app";

const PORT = 5000;
const handleListening = (req, res) => console.log("✅ Connected!");

app.listen(PORT, handleListening);

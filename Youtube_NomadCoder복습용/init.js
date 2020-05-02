import app from "./app";
const PORT = 5000;

const handleListening = () => console.log("Hello");

app.listen(PORT, handleListening);
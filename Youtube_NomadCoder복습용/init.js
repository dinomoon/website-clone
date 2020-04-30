const app = require("./app");
const PORT = 5000;

const handleListening = () => console.log("Hello");

app.get('/', (req, res) => res.send("HEllo"));
app.listen(PORT, handleListening);
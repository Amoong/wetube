import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("tiny");

const hanldeHome = (req, res, next) => {
  return res.send("<h1> hi </h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "hi" });
};

app.use(logger);
app.get("/", hanldeHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 😉`);

app.listen(PORT, handleListening);

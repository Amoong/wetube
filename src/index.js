import express from "express";

const PORT = 4000;

const app = express();

const wowMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const hanldeHome = (req, res, next) => {
  return res.send("<h1> hi </h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "hi" });
};

app.get("/", wowMiddleware, hanldeHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 😉`);

app.listen(PORT, handleListening);

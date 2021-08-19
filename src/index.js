import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1> Not Allowed</h1>");
  } else {
    console.log("Allowed! you may continue.");
    next();
  }
};

const hanldeHome = (req, res, next) => {
  return res.send("<h1> hi </h1>");
};

const handleLogin = (req, res) => {
  return res.send({ message: "hi" });
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", hanldeHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 😉`);

app.listen(PORT, handleListening);

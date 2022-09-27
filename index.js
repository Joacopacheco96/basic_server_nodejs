const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const somecontroller = require("./controllers/EXAMPLE.js");

const {
  TOKEN_SECRET,
  verifyToken,
} = require("./middlewares/jwt-verification.js");

app.use("/RUTACUALQUIERA", verifyToken, somecontroller);

app.listen(3001, function () {
  console.log("App corriendo en el puerto 3001");
});

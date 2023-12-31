const express = require("express");
const app = express();

const cors = require("cors");

const TokenRoute = require("./routes/token");

app.listen(5000, () => {
  console.log("Server ina run poa sana!");
});
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Kigogo on the server");
});

app.use("/token", TokenRoute);

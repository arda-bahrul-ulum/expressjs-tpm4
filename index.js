import express from "express";
import laguRoute from "./router/lagu.js";
import authRoute from "./router/auth.js";

const app = express();
const port = 8001;

app.use(express.json());

app.use("/lagu", laguRoute);
app.use("/login", authRoute);

app.listen(port, () => {
  console.log("server running di port ", port);
});

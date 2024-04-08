import https from "https";
import fs from "fs";

import app from "./app.js";
import { connectDB } from "./config/db.js";

const privateKey = fs.readFileSync("src/config/key.pem");
const certificate = fs.readFileSync("src/config/cert.pem", "utf-8");
const port = process.env.PORT || 3000;

const credentials = { key: privateKey, cert: certificate };

/* DESARROLLO */
// app.listen(3000);
// console.log("Up");

/* PRODUCCION */
https
  .createServer(credentials, app)
  .listen(port, "0.0.0.0", () => console.log("Up"));
connectDB();

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoute from "./routes/auth.route.js";
import productRoute from "./routes/product.route.js";
import supplierRoute from "./routes/supplier.route.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://login-b2f58.web.app",
    // origin: "http://localhost:5173",
    // preflightContinue: true,
    credentials: true,
  })
);
app.get("/hello", (req, res) => res.send(req.cookies["__session"]));
app.get("/", (req, res) => {
  const cookies = req.cookies;
  res.send(cookies);
});

app.post("/teclado", (req, res) => {
  const clave = req.body.clave;

  console.log(clave);
  res.send(clave);
});

app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/suppliers", supplierRoute);

export default app;

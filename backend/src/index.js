import app from "./app.js";
import { connectDB } from "./config/db.js";

connectDB();
// app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0");
console.log("Up");

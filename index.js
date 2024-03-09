import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import Routes from "./src/router/routes.js";
import Connect from "./src/model/Connect.js";
import { getProducts } from "./src/controllers/ProductData.js";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Connect
Connect();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.get("/css/index.css", (req, res) => {
  res.setHeader("Content-Type", "text/css");
  res.sendFile(path.join(__dirname, "./src/public/css/index.css"));
});

// Router
Routes(app);

app.get("/api/products", getProducts);

app.listen(port, () => {
  console.log("Localhost is http://localhost:3000");
});

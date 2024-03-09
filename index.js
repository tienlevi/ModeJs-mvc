import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import handlebars from "express-handlebars";
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "src/views"));
app.use(express.static(path.join(__dirname, "public")));

// Router
Routes(app);

app.get("/api/products", getProducts);

app.listen(port, () => {
  console.log("Localhost is http://localhost:3000");
});

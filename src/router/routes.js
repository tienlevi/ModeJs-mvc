import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function Routes(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/about.html"));
  });

  app.get("/search", (req, res) => {
    console.log(req.query.q);
    res.sendFile(path.join(__dirname, "../views/search.html"));
  });
}

export default Routes;

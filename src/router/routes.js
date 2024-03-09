import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import ProductModel from "../model/Products.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function Routes(app) {
  app.get("/", async (req, res) => {
    try {
      // const data = await ProductModel.find();
      res.render("index");
    } catch (error) {
      console.log(error);
    }
  });
}

export default Routes;

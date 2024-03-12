import {
  addPage,
  getProduct,
  handleAdd,
} from "../controllers/ControllerData.js";

function Routes(app) {
  app.get("/", getProduct);
  app.get("/add", addPage);
  app.post("/add", handleAdd);
}

export default Routes;

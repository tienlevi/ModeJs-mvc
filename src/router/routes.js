import {
  addPage,
  getProductById,
  getProduct,
  handleAdd,
  handleDelete,
  handleEdit,
} from "../controllers/ControllerData.js";

function Routes(app) {
  app.get("/", getProduct);
  app.get("/add", addPage);
  app.get("/edit/:id", getProductById);
  app.post("/add", handleAdd);
  app.delete("/delete/:id", handleDelete);
  app.put("/edit/:id", handleEdit);
}

export default Routes;

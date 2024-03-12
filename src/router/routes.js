import ProductModel from "../model/Products.js";

function Routes(app) {
  app.get("/", async (req, res) => {
    try {
      const products = await ProductModel.find({}).lean();
      res.render("index", { products: products });
    } catch (error) {
      console.log(error);
    }
  });
}

export default Routes;

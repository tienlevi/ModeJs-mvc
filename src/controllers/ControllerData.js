import ProductModel from "../model/Products.js";

export const getProduct = async (req, res) => {
  try {
    const products = await ProductModel.find({}).lean();
    res.render("index", { products: products });
  } catch (error) {
    console.log(error);
  }
};

export const addPage = (req, res) => {
  res.render("add");
};

export const handleAdd = async (req, res) => {
  try {
    const products = new ProductModel(req.body);
    await products.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

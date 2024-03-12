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

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id).lean();
    res.render("edit", { product: product });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
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

export const handleDelete = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const handleEdit = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

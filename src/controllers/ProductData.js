import ProductModel from "../model/Products.js";

export const getProducts = async (req, res) => {
  try {
    const data = await ProductModel.find({});
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

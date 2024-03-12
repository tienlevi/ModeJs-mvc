import ProductModel from "../model/Products.js";

export const getProducts = async (req, res, next) => {
  try {
    const data = await ProductModel.find({});
    res.json(data);
  } catch (error) {
    next(error);
  }
};

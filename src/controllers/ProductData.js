import ProductData from "../model/Products.js";

export const getProducts = async (req, res) => {
  try {
    const data = await ProductData.find({});
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

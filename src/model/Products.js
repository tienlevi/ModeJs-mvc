import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String },
  price: { type: Number },
  createAt: { type: Date, default: Date.now },
});

const ProductData = mongoose.model("products", Product);

export default ProductData;

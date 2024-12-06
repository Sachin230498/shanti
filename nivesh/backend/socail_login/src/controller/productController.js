import Product from "../models/productModel.js";

// Get All Products
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// CRUD for Admin
const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json({ product });
};

const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json({ product });
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};

export { getProducts, createProduct, updateProduct, deleteProduct };

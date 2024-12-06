import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    paymentDetails: {
      orderId: { type: String },
      paymentId: { type: String },
      signature: { type: String },
      status: { type: String, enum: ["pending", "paid"], default: "pending" },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

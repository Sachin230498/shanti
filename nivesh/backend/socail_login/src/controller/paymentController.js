import Razorpay from "razorpay";
import Product from "../models/productModel.js";


const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});


// Create Razorpay Order
const createOrder = async (req, res) => {
  const { amount, productId } = req.body;

  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  });

  product.razorpayOrderId = order.id;
  await product.save();

  res.json({ order });
};


const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const isValidSignature = razorpay.utils.verifyPaymentSignature(
      {
        order_id: razorpay_order_id,
        payment_id: razorpay_payment_id,
      },
      razorpay_signature
    );

    if (isValidSignature) {
      return res
        .status(200)
        .json({ success: true, message: "Payment Verified Successfully" });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Payment Signature" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
export { createOrder, verifyPayment };

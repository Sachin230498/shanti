// key_id, key_secret;
// rzp_test_LT2519D6hQR5Ax, mu9lylvGmVROK5Kliz91chVw;

import Razorpay from "razorpay"


const razorpay = new Razorpay({
key_id :"rzp_test_LT2519D6hQR5Ax",
key_secret : "mu9lylvGmVROK5Kliz91chVw"
})


const payment = async (req, res) => {
    const { amount, currency } = req.body;

    try {
        const order = await razorpay.orders.create({
            amount: amount * 100, // Amount in paise (INR)
            currency,
            receipt: 'receipt_order_1',
        });
        res.json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export default payment;
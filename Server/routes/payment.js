import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount, // amount in paise (e.g., 50000 = ₹500)
    currency: "INR",
    receipt: "receipt_order_" + new Date().getTime(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order); // returns id, amount, currency, etc.
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating Razorpay order");
  }
});

export default router;

const express = require("express");
const searchroute = require("./route/searchrouter");
const productRoute = require("./route/productRote");
const app = express();
app.use(express.json());
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OFfDcSFuYPQ8NkkuYA72lHvBGSjM85WF9l552EtiMbyoKQ9Vcg0xWQXONFqiPNbx1CMp7n6bUEL12rtIF9DYYJG00sgCMYDrL");
const connection = require("./config/db1");

console.log(connection);
const routeone = require("./route/userrouter");
const port = process.env.PORT || 7800;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(searchroute);
app.use("/api", routeone);
app.use("/api", productRoute);
app.post("/checkout", async (req, res) => {
  const { products } = req.body;
  console.log(products);
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://chic-scone-7d743a.netlify.app",
    cancel_url: "https://chic-scone-7d743a.netlify.app",
  });
  res.json({ id: session.id });
});
app.listen(port, async () => {
  try {
    await connection();
    console.log("server starting...");
  } catch (err) {
    console.log(err, "error");
  }
});
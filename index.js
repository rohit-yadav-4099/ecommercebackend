const express = require("express");
const searchroute = require("./route/searchrouter");
const productRoute = require("./route/productRote");
const app = express();
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OQ699SDqC8mEPn5pB7sPVdEUfIgAMLHz3odwvDk5s4OhR5qM3SVC6O41UkeROoxMoUj9Z1X6CEkID2erfRIgwoi00iKuOSTzF");
const connection = require("./config/db1");
console.log(connection);
const routeone = require("./route/userrouter");
const port = process.env.PORT || 7800;

app.use(express.json());
// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(searchroute);
app.use("/api", routeone);
app.use("/api", productRoute);

// checkout Api


app.post("/api/create-checkout-session", async (req, res) => {
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
    success_url: "https://localhost:3000/success",
    cancel_url: "https://localhost:3000/cancle",
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

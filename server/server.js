// This is your test secret API key.
const stripe = require('stripe')('sk_test_51NiY4JSB2woBMpeMEb6F2gonpghjzhYwDWB1HosNEXzfAG1TsTY9xGPKvY2VXv8TJoimr1BwnhiLg2T1vbqBOauT00sFvtllKM');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('../public'));

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
  };
  
app.use(cors(corsOptions));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    const price = await stripe.prices.create({
        currency: 'inr',
        unit_amount: 100,
        product: 'prod_OiKhygrIDwCXsH',
      });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: price.id,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  console.log(session);
  res.redirect(303, session.url);
});

app.listen(3000, () => console.log('Running on port 3000'));
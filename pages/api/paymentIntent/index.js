const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
export default async function handler(req, res) {
    const booking = req.body ;
    const price = booking.price ;
    const amount = parseFloat(price * 100) ;

    const paymentIntent = await stripe.paymentIntents.create({
        currency : "usd",
        amount : amount ,
        "payment_method_types": [
            "card"
        ]
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
      });
    // res.send({name:"name"})
}
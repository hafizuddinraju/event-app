
// import { buffer } from "micro";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// export const config = {
//     api: {
//         bodyParser :false,

//     },
// }

// export default async function handler (req,res) {
//     if(req.method == 'POST') {
//         let event;
//         try {
//             const rawBody = await buffer(req)
//             const signature = req.headers['stripe-signature'];

//             event = stripe.webhooks.constructEvent(
//                 rawBody.toString(),
//                 signature,
//                 process.env.STRIPE_WEBHOOK_SECRET
//             );
//         } catch (error) {
//             console.log(`Error message: ${err.message}`);
//             res.status(400).send(`webhook Error:${error.message}`);
//             return
//         }
//         console.log('success:',event.id)
//         if(event.type === 'checkout.session.complete'){
//             console.log(`payment successful!`)
//         }else{
//             console.log(`unHandler event type: ${event.type}`)
//         }
//         res.json({received:true})
//     } else {
//         res.setHeader('Allow','POST');
//         res.status(405).end('method not allowed');
//     }
// }
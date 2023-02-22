import { useRouter } from "next/router";
import { useState } from "react";

import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../components/CheckOutForm/CheckOutForm";
import { getSingleBookingPayment } from "../../../lib/helperBooking";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const userPaymentPage = () => {
    const [getEventPayment , setGetEventPayment] = useState({});
    const router = useRouter();
    const id = router.query.paymentId ;
    console.log(id)
   
   useEffect(()=>{
    // get event for further details
    getSingleBookingPayment(id)
     .then(res =>setGetEventPayment(res))
   
   },[id]);

   console.log(getEventPayment, "call it")



    return (
        <div className="py-32 flex justify-around h-screen">
            <div>
                <h2 className="font-bold text-3xl mb-4">Payment For <span className="text-sky-500">{getEventPayment?.event_name}</span></h2>
                <div className="flex items-center gap-3 justify-center">

               
                <img className="w-24 rounded-full" src={getEventPayment?.picture || ""} alt="" />
                <p className="font-bold">Price : ${getEventPayment?.price || ""}</p>
                </div>
            </div>
            <div className="w-96 border-2 mt-4">
            <Elements stripe={stripePromise}>
                <CheckOutForm booking ={getEventPayment} />
            </Elements>
            </div>
        </div>
    );
};

export default userPaymentPage;
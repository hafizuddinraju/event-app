import { useRouter } from "next/router";
import { useState } from "react";
import { getEvent} from "../../../lib/helperSubCategory";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../../../components/CheckOutForm/CheckOutForm";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const userPaymentPage = () => {
    const [getEventPayment , setGetEventPayment] = useState({});
    const router = useRouter();
    const id = router.query.payment ;
   
   useEffect(()=>{
    // get event for further details
    getEvent(id)
     .then(res =>setGetEventPayment(res))
   
   },[id]);



    return (
        <div className="my-32 flex justify-around">
            <div>
                <h2>Payment For </h2>
                <h2 className="text-3xl font-bold">{getEventPayment?.name || ""}</h2>
                <p className="font-bold">Price : ${getEventPayment?.price || ""}</p>
                <img className="w-32" src={getEventPayment?.image_url || ""} alt="" />
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
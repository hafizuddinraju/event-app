import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../context/AuthProvider';
import { getEvent, updateSubCategory } from '../../lib/helperSubCategory';
import { postMailer } from '../../lib/mailerHelper';
import { postPaymentIssueHelper, updateBookingPayment } from '../../lib/paymentIssueHelper';

const CheckOutForm = ({booking}) => {
  const {user} = useContext(AuthContext);
    // contain card error among this state 
    const [cardError , setCardError] = useState('');
    const [success , setSuccess] = useState("");
    const [transactionId , setTransactionId] = useState("");
    const [processing, setProcessing] = useState(false);
    const router = useRouter();
    
    console.log(booking,'checkoutpage')
     const price = booking?.price?.slice(1,6) ;
    // console.log(price)
    const stripe = useStripe();
    const elements = useElements();
    //    payment implement
const [clientSecret, setClientSecret] = useState("");

useEffect(() => {
  // Create PaymentIntent as soon as the page loads
  const newFun = async() =>{
    fetch("/api/paymentIntent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({price}),
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
  }
  newFun()
}, [price]);

// useEffect(()=>{
//   getEvent(booking?.product_id)
//   .then(res =>{
//     console.log(res,"data find")
//   })

// },[booking?.product_id])


    const handleSubmit =async (event) =>{
        event.preventDefault(); 
        // Stripe.js has not loaded yet. Make sure to disable
        if(!stripe || !elements){
            return ;
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return ;
        };

        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        });

        if(error){
            console.log(error);
            setCardError(error.message);
        }
        else{
            setCardError("")
        }
        setSuccess("")
        setProcessing(true);
        // confirm card error
        const {paymentIntent, error:confirmCardError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name : booking?.name,
                email : user?.email
              },
            },
          },
        );
        if(confirmCardError){
          setCardError(confirmCardError.message);
          return ;
        }
        if(paymentIntent.status === "succeeded"){
          setSuccess("congrats payment successful");
          setTransactionId(paymentIntent.id);
          console.log(paymentIntent, "this is payment")

          const paymentInfo ={
            eventName:booking?.event_name,
                userEmail : user?.email,
                eventId : booking?._id,
                price : booking?.price,
                eventUpdate: 10,
                transaction_Id: paymentIntent.id
          }
          
            const response = await postPaymentIssueHelper(paymentInfo)
           if(response){
            const formData = {availability : "paid"}

            const updateResponse = await updateBookingPayment(booking?._id , formData)
            console.log(updateResponse, "this is response")
            const eventSubRes = await updateSubCategory(booking?.product_id, formData)

            if(eventSubRes){
              swal("Payment SuccessFul!", "success", {
                button: "Done!",
              });
              router.push('/dashboard/myOrders')
              const dataEvent = {
                name:booking?.event_name,
                email:user?.email,
                message:paymentIntent.id
              }
              const mail = await postMailer(dataEvent)
             
              

            }
           }
        

        }
        setProcessing(false)

    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success mt-4' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
        {cardError && <p className='text-red-900 text-xl font-semibold'>{cardError}</p>}
        {
          success && <>
           <p className='text-green-900 text-xl font-semibold'>{success}</p>
           <p className='text-green-900  font-semibold'>TransactionId : {transactionId}</p>
          </>
        }
      </form>
    );
};

export default CheckOutForm;
export const getAllPayments = async () => {
    const response = await fetch(`/api/paymentIssue`)
    const json = await response.json()

    return json;
}
export const getSinglePayment = async (paymentId) => {
    const response = await fetch(`/api/paymentIssue/${paymentId}`);
    const dataPayment = await response.json()

    if(dataPayment) return dataPayment;
    
    
};

// posting a payment issue when payment
export async function postPaymentIssueHelper(formData){
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`/api/paymentIssue`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}

// update booking
// Update a booking when payment success

export const updateBookingPayment = async ( paymentId , formData ) =>{
    try {
        const Options = {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`/api/paymentIssue/${paymentId}`,Options);
        const json = await response.json()
        return json ;
    } catch (error) {
        return error ;
    }
}
export const updatePaymentRoadMap = async ( paymentId , formData ) =>{
    try {
        const Options = {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`/api/updatePaymentRoadmap/${paymentId}`,Options);
        const json = await response.json()
        return json ;
    } catch (error) {
        return error ;
    }
}

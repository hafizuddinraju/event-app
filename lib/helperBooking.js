
// all user
export const getBookings = async () => {
    const response = await fetch(`/api/bookings`)
    const json = await response.json()

    return json;
}


// single user
export const getSingleBooking = async (bookingId) => {
    const response = await fetch(`/api/bookings/${bookingId}`);
    const dataCategory = await response.json()

    if(dataCategory) return dataCategory;
    
}


// posting a new user
export async function addBooking(formData){
    console.log(formData);
    try{
        const Options = {
            method : 'POST',
            headers : { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }
        
        const response = await fetch(`/api/bookings`, Options)
        const json = await response.json()

        return json;
    }catch(error){
        return error;
    }
}


// Update a new user



// Delete a new user
export async function deleteBooking(bookingId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`/api/bookings/${bookingId}`, Options)
    const json = await response.json()
    return json;
}
export const getReviews = async () => {
    const data = await fetch('/api/reviews');
    const json = await data.json();
    return json;
}

export const getSingleEventReview = async (productId) => {
    const response = await fetch(`/api/reviews/${productId}`);
    const json = await response.json()
    return json;
}

export async function addReview(formData){
    console.log(formData);

    try {
       const Reviews = {
        method: 'POST',
        headers: { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
       } 

       const response = await fetch(`/api/reviews`, Reviews)
       const json = await response.json();

       return json;

    } catch (error) {
        return error;
    }
}

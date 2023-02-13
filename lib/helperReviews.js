export const getReviews = async () => {
    const data = await fetch('/api/reviews');
    const json = await data.json();
    return json;
}
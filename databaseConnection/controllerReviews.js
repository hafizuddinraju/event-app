import reviewsCollection from "../model/reviewsSchema"

export const getReviews = async (req, res) =>{
    try {
        const review = await reviewsCollection.find({});
        if(!review){
            return res.status(404).json({error: 'data not found'})
        }
        res.status(200).json(review);
    } catch (error) {
        return res.status(404).json({error: 'error while fetching data'})
    }
}
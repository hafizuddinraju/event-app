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

export const getSingleEventReview = async (req, res, next) => {
    try {
        const {productId} = req.query;
        const filter = {product_id : productId}
        const reviewCount = await reviewsCollection.countDocuments(filter)

        if(reviewCount > 0){
            const reviews = await reviewsCollection.find(filter);
            res.status(200).json(reviews);
        } else {
            res.status(404).json({ message: 'No reviews found for the specified product.' });
        }
        
    } catch (error) {
        res.status(404).json({ error: "Cannot get the Product...!" });
    }
}

export const postReview = async (req, res) => {
    try {
        const formData = req.body;
        if(!formData){
            return res.status(404).json({ error: "Form Data Not Provided...!" });
        }
        reviewsCollection.create(formData, function(err, data){
            return res.status(200).json(data);
        })
    } catch (error) {
        return res.status(404).json({ error });
    }
}
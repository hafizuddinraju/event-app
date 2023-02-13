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
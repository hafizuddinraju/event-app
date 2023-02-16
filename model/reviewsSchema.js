import { model, models, Schema } from "mongoose";

const reviewsSchema = new Schema ({
    user_name:String,
    user_email:String,
    user_img:String,
    date:String,
    product_id:String,
    reviewDesc:String,
    rating:String
})

const reviewsCollection = models.reviews || model('reviews', reviewsSchema)

export default reviewsCollection;
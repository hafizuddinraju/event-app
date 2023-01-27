
import { model, models, Schema } from "mongoose";

const bookingsCateSchema = new Schema({
    picture: String,
    price:String,
    phone: Number,
    availability: String,
    email: String,
    product_id: String,
})

const bookingsData = models.bookings || model("bookings", bookingsCateSchema);

export default bookingsData;
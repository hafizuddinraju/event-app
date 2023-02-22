
import { model, models, Schema } from "mongoose";

const bookingsCateSchema = new Schema({
    picture: String,
    price:String,
    phone: Number,
    availability: String,
    email: String,
    product_id: String,
    optionals: String,
    event_name: String,
    event_Date: String
});

const bookingsData = models.bookingsevent || model("bookingsevent", bookingsCateSchema);

export default bookingsData;
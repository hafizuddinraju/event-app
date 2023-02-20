
import { model, models, Schema } from "mongoose";

const subCateSchema = new Schema({
    code: String,
    name: String,
    description: String,
    availability: String,
    price: String,
    image_url: String,
    location: String,
    position: String,
    latitude: String,
    longitude: String
})

const subCategories = models.subCategory || model("subCategory", subCateSchema);

export default subCategories;
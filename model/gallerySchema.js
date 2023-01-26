
import { model, models, Schema } from "mongoose";

const GallerySchema = new Schema ({
    title:String,
    desc:String,
    cover:String
})

const photoGallery = models.allPhotos || model("allPhotos", GallerySchema);

export default photoGallery;
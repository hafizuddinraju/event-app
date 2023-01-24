import { model, models, Schema } from "mongoose";

const photoGallerySchema = new Schema ({
    title:String,
    desc:String,
    cover:String
})

const photoGallery = models.allPhotos || model("allPhotos", photoGallerySchema);

export default photoGallery;
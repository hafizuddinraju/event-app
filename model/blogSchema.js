import { model, models, Schema } from "mongoose";

const blogSchema = new Schema({
    name:String,
    title:String,
    desc:String,
    Image:String
})

const blogCollection = models.blogs || model('blogs',blogSchema)

export default blogCollection;
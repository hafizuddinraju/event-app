import { model, models, Schema } from "mongoose";

const blogSchema = new Schema({
    name:String,
    title:String,
    desc:String,
    image:String
})

const blogCollection = models.blogCall || model('blogCall',blogSchema)

export default blogCollection;
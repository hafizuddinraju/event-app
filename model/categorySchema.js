import {model, models, Schema} from "mongoose";

const categorySchema = new Schema ({
    code: String,
    cate_name: String,
    img: String,
    sub_cate: String,
    description: String
})

const category = models.categories || model("categories", categorySchema);

export default category;
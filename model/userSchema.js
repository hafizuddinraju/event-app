
import { model, models, Schema } from "mongoose";

const userSchema = new Schema ({
    name:String,
    email:String,
    role:String
})

const userInfo = models.users || model("users", userSchema);

export default userInfo;
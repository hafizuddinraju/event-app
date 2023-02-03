import { model, models, Schema } from "mongoose";

const customEvenSchema = new Schema({
    eventName :String ,
    email : String ,
    phone:Number ,
    eventDate : String ,
    guest: Number ,
    description:String ,
    eventLocation : String,
    status : String

});

const customEventModel = models.requestedEvents || model('requestedEvents', customEvenSchema)
export default customEventModel ;
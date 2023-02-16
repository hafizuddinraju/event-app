import { model, models, Schema } from "mongoose";

const paymentEventSchema = new Schema({
    price:String,
    eventId : String,
    userEmail : String ,
    eventName : String,
    eventUpdate: Number,
    transaction_Id: String
});

const paymentIssueEventSchemaModel = models.paymentEventSchema || model("paymentEventSchema", paymentEventSchema);

export default paymentIssueEventSchemaModel ; 
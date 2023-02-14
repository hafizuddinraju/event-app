import { model, models, Schema } from "mongoose";

const paymentSchema = new Schema({
    price:String,
    eventId : String,
    userEmail : String ,
    eventName : String
});

const paymentIssueSchemaModel = models.paymentSchema || model("paymentSchema", paymentSchema);

export default paymentIssueSchemaModel ; 
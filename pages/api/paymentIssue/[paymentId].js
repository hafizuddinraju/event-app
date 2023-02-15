import { updateBooking } from "../../../databaseConnection/controllerBooking";
import connectMongo from "../../../databaseConnection/database";
import { getPaymentSingle } from "../../../databaseConnection/paymentIssueSchemaController";

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            // res.status(200).json({method,name:'Get'})
            getPaymentSingle(req, res)
            break;
        case "PUT" :
            updateBooking(req , res);
            break ;
        
          
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
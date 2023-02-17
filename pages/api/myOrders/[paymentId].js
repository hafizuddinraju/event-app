import { getSingleBookingPayment } from "../../../databaseConnection/controllerBooking";
import connectMongo from "../../../databaseConnection/database";

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            // res.status(200).json({method,name:'Get'})
            getSingleBookingPayment(req, res)
            break;
        case 'DELETE':
            res.status(200).json({method,name:'Delete'})
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
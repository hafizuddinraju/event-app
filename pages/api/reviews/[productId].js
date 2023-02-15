import { getSingleEventReview } from "../../../databaseConnection/controllerReviews";
import connectMongo from "../../../databaseConnection/database";


export default async function reviewHandler (req, res) {

    connectMongo().catch(() => res.status(405).json({ error: "Error in the connection"}))

    const {method} = req

    switch(method) {
        case "GET":
            getSingleEventReview(req, res);
            break;
        
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}
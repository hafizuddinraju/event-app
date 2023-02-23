import { getSingleSubCategory, updateSubAvailability } from "../../../databaseConnection/controllerSubCategory";
import connectMongo from "../../../databaseConnection/database";

export default async function handler(req, res) {

    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }))

    // type of request
    const { method } = req

    switch (method) {
        case "GET":
            getSingleSubCategory(req, res);
            break;
            case "PUT":
                updateSubAvailability(req, res);
                break;
        // case 'DELETE':
        //     deleteRoom(req, res)
        //     break;
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
}
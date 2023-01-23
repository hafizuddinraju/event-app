import { getCategory } from "../../../databaseConnection/controllerCategory";
import connectMongo from "../../../databaseConnection/database";


export default function  handler(req , res){
    connectMongo().catch(()=> res.status(405).json({error:'error db connection'}))
    const {method} = req ;

    switch (method) {
        case 'GET':
            // get for all categories
            getCategory(req, res);
            break;
    
        default:
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allow`)
            break;
    }

}
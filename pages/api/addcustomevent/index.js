import { addCustomEvent, getCustomEvent, updateCustomEventData } from "../../../databaseConnection/customEvenetController";
import connectMongo from "../../../databaseConnection/database";

export default async function handler (req , res ){
    connectMongo().catch((error)=>res.status(405).json({error:"database connection error"}));

    // type of request
    const {method} = req ; 
    switch (method) {
        case "GET":
            getCustomEvent(req , res )
            // res.status(200).json({method , name:"GET Method"});
            break;
        case "POST":
            addCustomEvent(req , res );
            // res.status(200).json({method , name: "Post Method"})
          break ;
        case "PUT":
            updateCustomEventData(req , res);
            // res.status(200).json({method, name : "PUT method this is"});
            break ;
        case "DELETE":
            res.status(200).json({method , name : "DELETE method"})
            break ; 
        default:
            res.setHeader('Allow', ["GET", "POST", "PUT", "DELETE"])
            res.status(404).end(`Method ${method} not allow`);
            break;
    }
}
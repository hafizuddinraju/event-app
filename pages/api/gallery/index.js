import { getPhotoGallery } from "../../../databaseConnection/controllerGallery";
import connectMongo from "../../../databaseConnection/database";


export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection"}))

    // type of request
    const { method } = req

    switch(method){
        case 'GET' :
            // res.status(200).json({method,name:'Get'})
            getPhotoGallery(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET']);
            res.status(405).end(`Method ${method} Not Allow`)
            break;
    }
  }
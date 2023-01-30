// import connectMongo from "../../../databaseConnection/database"
// import { getPhotoGallery } from "../../../lib/helperGallery"

// export default async function handler(req,res) {
//    connectMongo().catch(()=> res.status(404).json({error:"connection closed"}))

//     const {method} = req

//     switch(method){
//         case "GET" :
//             getPhotoGallery(req,res)
//             break;

//             default : 
//             res.setHeader('Allow', ['GET']);
//             res.status(405).end(`Method ${method} Not Allow`)
//             break;
//     }
// }
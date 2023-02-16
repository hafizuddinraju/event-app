import connectMongo from "../../../databaseConnection/database";
import { blogData, postBlog } from "../../../databaseConnection/controllerBlog";

export default async function (req,res) {
    connectMongo().catch(()=>res.status(405).json({error:'error in the connection'}))
    const {method} = req

    switch (method) {
        case 'GET':
            // res.status(200).json({method,name:'get'})
            blogData(req,res)
            break;
        case 'POST':
            // res.status(200).json({method,name:'get'})
            postBlog(req,res)
            break;
        
        default:
            res.setHeader('Allow','GET')
            res.status(405).end(`method ${method} not supported`)
            break;

    }
}
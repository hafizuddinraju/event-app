import { getReviews, postReview } from '../../../databaseConnection/controllerReviews';
import connectMongo from '../../../databaseConnection/database';

export default async function (req, res){
    connectMongo().catch(()=>res.status(405).json({error: 'error in the connection'}))
    const {method} = req

    switch (method) {
        case 'GET':
            // res.status(200).json({method, name: "get"})
            getReviews(req, res)
            break;

        case 'POST':
            postReview(req, res)
            break;
    
        default:
            res.setHeader('Allow','GET')
            res.status(405).end(`method ${method} not supported`)
            break;
    }
}
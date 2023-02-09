import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        if (connection.readyState == 1 ) {
            console.log('click');
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }
} 

export default connectMongo;

export const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);
    }
    return stripePromise;
}
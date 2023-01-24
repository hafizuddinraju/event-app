import mongoose from "mongoose"

const connectMongo =async() =>{
    try {
        const {connection} = await mongoose.connect('mongodb+srv://event-app:ABYOTlyPASzqEEdt@cluster0.fxdma7b.mongodb.net/?retryWrites=true&w')
        if (connection.readyState == 1 ) {
            console.log('click');
            return Promise.resolve(true)
        }
    } catch (error) {
        return Promise.reject(error)
    }

}

export default connectMongo;
import mongoose from "mongoose";

const ConnectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('mongodb connected')
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDb;
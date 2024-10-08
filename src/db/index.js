import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance)
        console.log(`\nMONGODB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    }
    catch (error) {
        console.log(`MONGODB CONNECT ERROR: ${error.message}`);
        process.exit(1) // process is the current application which is running.
    }
}

export default connectDB;
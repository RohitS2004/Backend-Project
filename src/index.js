// require('dotenv').config({path: "./env"});
import dotenv from "dotenv"
import connectDB from "./db/index.js" // sometimes it is necessary to add the extension of the file which you want to import otherwise the import will not work

connectDB(); // connecting to the database

dotenv.config(
    {
        path: "./env"
    }
)

// TODO: What is the use of dotenv package







/*
import express from "express"
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(`ERROR: ${error}`)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`APP is listening on PORT: ${process.env.PORT}`)
        });
    }
    catch (error) {
        console.error(`ERROR: ${error.message}`)
    }
})()
*/

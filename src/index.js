import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDb from "./db/index.js";
import "dotenv/config"
import { app } from "./app.js";



connectDb()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is running at port http://localhost:${process.env.PORT || 4000}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB connection failed !! ", err)
    })






/*
import express from "express"
const app = express()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.error("ERROR: EXPRESS", error)
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listining on port http://localhost${process.env.PORT}`)
            })
        } catch (error) {
            console.error("ERROR", error)
            throw error
        }
    })()

*/
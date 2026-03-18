import mongoose from "mongoose";
import { config } from './config.js'

const connectDB = async () => {
    try {
        
        mongoose.connection.on('connected', () => {
            console.log("Connected to DataBase sucessfully");
        });
        mongoose.connection.on('error', (err) => {
            console.log("Lost connection to database...", err);
            
        });

        await mongoose.connect(config.databaseUrl as string);

    } catch(err) {
        console.error("Failed to connect database");
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;

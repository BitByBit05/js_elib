import mongoose from "mongoose";
import { config } from './config.js'

const connectDB = async () => { // 'async' makes the script wait for the DataBase connection to be built
    try {
        
        mongoose.connection.on('connected', () => {  //---> Event Listener: If the connection is successful, it logs a success message; if it breaks later, it logs an error.
            console.log("Connected to DataBase sucessfully");
        });

        mongoose.connection.on('error', (err) => {
            console.log("Lost connection to database...", err);
            
        });

        await mongoose.connect(config.databaseUrl as string); //Actual attempt to link DataBase
        //'await' halts the process until connection attempt is finished

    } catch(err) {
        console.error("Failed to connect database");
        console.log(err);
        process.exit(1);  // ---> Kill Switch, Kills BackEnd
    }
};

export default connectDB;

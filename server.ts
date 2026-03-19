//import * as nodeRepl from 'node:repl';
import app from './src/app.js';
import { config } from './src/config/config.js'
import connectDB from './src/config/db.js';

const startServer = async () => { // 'async' makes the backend wait for DataBase to be ready...

    await connectDB();
    const port = config.port || 3000; //If port in the .env fails it defaults to 3000

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
}

startServer();
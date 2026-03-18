import * as nodeRepl from 'node:repl';
import app from './src/app.js';

const startServer = () => {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
}

startServer();
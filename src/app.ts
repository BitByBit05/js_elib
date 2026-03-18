import express from 'express'

const app = express();

//Routes
app.get('/', (request, response, next) => {
    response.json({message: "welcome to js elib"});
}); //HTTP methods: GET, POST, PUT, PATCH, DELETE 

export default app;
import express from 'express'

const app = express();

//Routes
app.get('/', (request, response, next) => {
    response.json({message: "welcome to js elib"});
}); //HTTP methods: GET, POST, PUT, PATCH, DELETE 

//Global Error Handler
app.use()

export default app;
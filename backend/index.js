
// Importing express.js libary
import express from "express";
// Importing the port to listen to defined in config.js
import {PORT, mongoDBURL} from "./config.js";
// Library to use mongoDB in our project
import mongoose from 'mongoose';
// Importing Book
import {Book} from "./models/bookModel.js";
// Importing Refactored router
import booksRoute from "./routes/booksRoute.js"
// Importing CORS to deal with CORS POLICY
import cors from 'cors';

// Creating an instance of the Express application
const app = express();

// Parsing the requests
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
/* `app.use(cors());` is a middleware function that allows Cross-Origin Resource Sharing (CORS) in
the Express application. */
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeader: [Content-Type]
// }))

// A route for the homepage(Default route "/")
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Tutorial");
});


app.use('/books', booksRoute);


// Connect to the mongoDB database with error handling
mongoose.
    connect(mongoDBURL)
    .then(() => {
        console.log("App successfully connected to the database!");

        // Function to listen to the port and return a callback function
        app.listen(PORT, () => {

            console.log(`App is listening to port: ${PORT}`);

        });
    })
    .catch((error) => {
        console.log(error);
    });

// Importing express.js libary
import express from "express";
// Importing the port to listen to defined in config.js
import {PORT} from "./config.js";



// Creating an instance of the Express application
const app = express();

// Function to listen to the port and return a callback function
app.listen(PORT, () => {

    console.log(`App is listening to port: ${PORT}`);

});
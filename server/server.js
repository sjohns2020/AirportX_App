const express = require("express");
const app = express();

//Server.js 

// Eliminating CORS issues
const cors = require("cors")
app.use(cors());

// Parse requests into json
app.use(express.json());


// API home route
app.get("/", (req, res) => {
    res.json({ message: "Go to /api/flights to see all Flights." });
});

// Created a resueable router for any table in the database. 
const createRouter = require("./routes/router.js")


// Create a flights Enpoint Router
const flights = require("./controllers/flight.controller.js");
const flightsRouter = createRouter(flights);
app.use('/api/flights', flightsRouter);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


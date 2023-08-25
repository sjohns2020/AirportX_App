const express = require("express");
const app = express();

// Eliminating CORS issues
const cors = require("cors")
app.use(cors());

// Parse requests into json
app.use(express.json());

// API home route
app.get("/", (req, res) => {
    res.json({ message: "Go to /api/flights to see all Flights." });
});

// Created a resueable RESTfull router for any table in the database if the database is extended. 
const createRouter = require("./routes/router.js") 
const flights = require("./controllers/flight.controller.js");
const flightsRouter = createRouter(flights);
app.use('/api/flights', flightsRouter);

// Bespoke routes for flights outwith the reuseable RESTfull router
// Retrieve all departing Flights
app.use('/api/flights/departures', flights.findAllDepartures)
// Retrieve all arriving Flights
app.use('/api/flights/arrivals', flights.findAllArrivals)



// sets port and listens for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


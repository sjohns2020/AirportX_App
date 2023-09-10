const express = require('express');

// A reusable RESTfull Router function that can be used for any collection.

const createRouter = function (collection) {
  const router = express.Router();

  // Create a new Flight
  router.post("/", collection.create);

  // Retrieve all Flights
  router.get("/", collection.findAll);

  // Retrieve a single Flight with id
  router.get("/flight/:id", collection.findOne);

  // Update a Flight with id
  router.put("/:id", collection.update);

  // Delete a Flight with id
  router.delete("/:id", collection.delete);

  // Delete all Flights
  router.delete("/", collection.deleteAll);

  // Retrieve all departing Flights
  router.get('/departures', collection.findAllDepartures);

  // Retrieve all arriving Flights
  router.get('/arrivals', collection.findAllArrivals);

  return router;
}

module.exports = createRouter;
const express = require('express');

// A reusable RESTfull Router function that can be used for any table.

const createRouter = function (table) {

  const router = express.Router();

  // Create a new Flight
  router.post("/", table.create);

  // Retrieve all Flights
  router.get("/", table.findAll);

  // Retrieve a single Flight with id
  router.get("/:id", table.findOne);

  // Update a Flight with id
  router.put("/:id", table.update);

  // Delete a Flight with id
  router.delete("/:id", table.delete);

  // Delete all Flights
  router.delete("/", table.deleteAll);

  //Retrieve all published Flights
  // router.get("/departures", table.findAllDeparting);

  return router;
}

module.exports = createRouter;
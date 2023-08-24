// The controller handles the request and response from the client. 

const Flight = require("../models/flights.model");

// Create and Save a new Flight
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Flight
    const flight = new Flight({
      flightNo: req.body.flightNo,
      departure: req.body.departure,
      destination: req.body.destination,
      date: req.body.date
    });
  
    // Save Flight in the database
    Flight.create(flight, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Flight."
        });
      else res.send(data);
    });
  };

// Retrieve all Flights from the database (with condition).
exports.findAll = (req, res) => {

    const departure = req.query.departure;
  
    Flight.getAll(departure, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving flights."
        });
      else res.send(data);
    });
  };
  
//   exports.findAllDeparting = (req, res) => {

//     Flight.getAllDepartingFlights(req.params.departed, (err, data) => {
//       if (err)
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving flights."
//         });
//       else res.send(data);
//     });
//   };

// Find a single Flight with a id
exports.findOne = (req, res) => {
    Flight.findById(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Flight with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Flight with id " + req.params.id
          });
        }
      } else res.send(data);
    });
  };

// find all published Flights
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Flight.updateById(
    req.params.id,
    new Flight(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Flight with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Flight with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Update a Flight identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Flight.updateById(
      req.params.id,
      new Flight(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Flight with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Flight with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Flight with the specified id in the request
exports.delete = (req, res) => {
    Flight.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Flight with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Flight with id " + req.params.id
          });
        }
      } else res.send({ message: `Flight was deleted successfully!` });
    });
  };

// Delete all Flights from the database.
exports.deleteAll = (req, res) => {
    Flight.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all flights."
        });
      else res.send({ message: `All Flights were deleted successfully!` });
    });
  };
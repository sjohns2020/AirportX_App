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
    FlightNo: req.body.FlightNo,
    Date: req.body.Date,
    Time: req.body.Time,
    ArrDep: req.body.ArrDep,
    PortOfCallA: req.body.PortOfCallA,
    Status: req.body.Status,
    OtherInfo: req.body.OtherInfo,
    Additional: req.body.Additional,
    Airline: req.body.Airline,
    Image: req.body.Image,
    ArrHall: req.body.ArrHall
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

  // This code is to help prevent SQL injection attacks by erroring if illegal characters are used.
  const onlyLettersPattern = /^[A-Za-z]+$/;
  for (const key in req.query) {
    const value = req.query[key];
    if (!value.match(onlyLettersPattern)) {
      return res.status(400).json({ err: `Invalid input in query parameter "${key}". "${value}" contains illegal characters. Only letters are allowed.` });
    }
  }

  // This route also accepts any query parameter so live data can be filetered
  Flight.getAll(req.query, (err, data) => {

    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving flights."
      });
    else res.send(data);
  });
};


// Find a single Flight with a FlightNo
exports.findOne = (req, res) => {
  Flight.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with FlightNo ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Flight with FlightNo " + req.params.id
        });
      }
    } else res.send(data);
  });
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
            message: `Not found Flight with FlightNo ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Flight with FlightNo " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};



// Delete a Flight with the specified id in the request
exports.delete = (req, res) => {
  Flight.remove(req.params.FlightNo, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Flight with FlightNo ${req.params.FlightNo}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Flight with FlightNo " + req.params.FlightNo
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

// Find all Departing Flights
exports.findAllDepartures = (req, res) => {

  // This code is to help prevent SQL injection attacks by erroring if illegal characters are used.
  const onlyLettersPattern = /^[A-Za-z]+$/;
  for (const key in req.query) {
    const value = req.query[key];
    if (!value.match(onlyLettersPattern)) {
      return res.status(400).json({ err: `Invalid input in query parameter "${key}". "${value}" contains illegal characters. Only letters are allowed.` });
    }
  }

  // This route also accepts any query parameter so live data can be filetered
  Flight.getAllDepartingFlights(req.query, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving flights."
      });
    } else {
      res.send(data);
    }
  });
};


// Find all Arriving Flights
exports.findAllArrivals = (req, res) => {

  // This code is to help prevent SQL injection attacks by erroring if illegal characters are used.
  const onlyLettersPattern = /^[A-Za-z]+$/;
  for (const key in req.query) {
    const value = req.query[key];
    if (!value.match(onlyLettersPattern)) {
      return res.status(400).json({ err: `Invalid input in query parameter "${key}". "${value}" contains illegal characters. Only letters are allowed.` });
    }
  }

  // This route also accepts any query parameter so live data can be filetered
  Flight.getAllArrivingFlights(req.query, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving flights."
      });
    else res.send(data);
  });
};

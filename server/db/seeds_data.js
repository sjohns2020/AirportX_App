const Flight = require("../models/flights.model.js");
const db = require("../db/db.js");

// Flight objects to seed database
const flightsData = [
  {
    flightNo: "FL001",
    departure: "GLA",
    destination: "LDN",
    date: "2023-08-20"
  },
  {
    flightNo: "FL002",
    departure: "LDN",
    destination: "DUB",
    date: "2023-08-21"
  },
  {
    flightNo: "FL003",
    departure: "DUB",
    destination: "EDI",
    date: "2023-08-22"
  }
];


// Drop the flights table if it already exists exists (Stops duplication when seeds file is run)
db.query("DROP TABLE IF EXISTS flights", (err, result) => {
    if (err) throw err;
    console.log("Dropped existing flights table.");
  
    // Create the flights table
    db.query(
      `CREATE TABLE flights (
        id INT AUTO_INCREMENT PRIMARY KEY,
        flightNo VARCHAR(255) NOT NULL,
        departure VARCHAR(255) NOT NULL,
        destination VARCHAR(255) NOT NULL,
        date DATE NOT NULL
      )`,
      (err, result) => {
        if (err) throw err;
        console.log("Created flights table.");
  
      // Insert flight objects into the flights table
      flightsData.forEach(flight => {
        Flight.create(new Flight(flight), (err, res) => {
          if (err) throw err;
        //   console.log("Created flight:", res);
        });
      });

      // Close the database connection (Stops this file hanging)
      db.end(err => {
        if (err) throw err;
        console.log("Database connection closed.");
      });
    }
  );
});

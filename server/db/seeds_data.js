const Flight = require("../models/flights.model.js");
const db = require("../db/db.js");

// Flight objects to seed database
const flightsData = [
  {
    "FlightNo": "EI3672",
    "Date": "03\/01\/2017",
    "Time": "12:25",
    "ArrDep": "A",
    "PortOfCallA": "SHANNON",
    "Status": "LANDED 1232",
    "OtherInfo": "NOW ON STAND",
    "Additional": "Baggage at carousel 1",
    "Airline": "Aer Lingus (Stobart Air)",
    "Image": "https:\/\/s3-eu-west-1.amazonaws.com\/ediassets\/img\/airlines\/EI.jpg",
    "ArrHall": "International"
  },
  {
    "FlightNo": "BA8926",
    "Date": "03\/01\/2017",
    "Time": "12:25",
    "ArrDep": "A",
    "PortOfCallA": "SHANNON",
    "Status": "LANDED 1232",
    "OtherInfo": "NOW ON STAND",
    "Additional": "Baggage at carousel 1",
    "Airline": "British Airways",
    "Image": "https:\/\/s3-eu-west-1.amazonaws.com\/ediassets\/img\/airlines\/BA.jpg",
    "ArrHall": "International"
  },
  {
    "FlightNo": "AF1686",
    "Date": "03\/01\/2017",
    "Time": "12:30",
    "ArrDep": "A",
    "PortOfCallA": "PARIS C D G",
    "Status": "LANDED 1323",
    "OtherInfo": "NOW ON STAND",
    "Additional": "Baggage at carousel 2",
    "Airline": "Air France",
    "Image": "https:\/\/s3-eu-west-1.amazonaws.com\/ediassets\/img\/airlines\/AF.jpg",
    "ArrHall": "International"
  }
];


// Format DATE and TIME to be handled by SQL DATE field
flightsData.forEach((flight) => {
  //Format DATE, "03\/01\/2017" = '2017-03-01'
  const date = flight["Date"] 
  const [month, day, year] = date.split("/")
  const formattedDate = `${year}-${month}-${day}`
  flight["Date"] = formattedDate
  //Format TIME, "12:30" = 
  const time = flight["Time"];
  const [hours, minutes] = time.split(":");
  const formattedTime = `${hours}:${minutes}:00`;
  flight["Time"] = formattedTime;
})


// Drop the flights table if it already exists exists (Stops duplication when seeds file is run)
db.query("DROP TABLE IF EXISTS flights", (err) => {
  if (err) throw err;
  console.log("Dropped existing flights table.");

  // Create the flights table
  db.query(
    `CREATE TABLE flights(
      id INT AUTO_INCREMENT PRIMARY KEY,
      FlightNo VARCHAR(10),
      Date DATE NOT NULL,
      Time TIME NOT NULL,
      ArrDep CHAR(1) NOT NULL,
      PortOfCallA VARCHAR(255) NOT NULL,
      Status VARCHAR(255) NOT NULL,
      OtherInfo VARCHAR(255),
      Additional VARCHAR(255),
      Airline VARCHAR(255) NOT NULL,
      Image VARCHAR(255),
      ArrHall VARCHAR(255) NOT NULL
    )`,
    (err) => {
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


const sql = require("../db/db.js");

// Constructor Function

const Flight = function (flight) {
    this.FlightNo = flight.FlightNo;
    this.Date = flight.Date;
    this.Time = flight.Time;
    this.ArrDep = flight.ArrDep;
    this.PortOfCallA = flight.PortOfCallA;
    this.Status = flight.Status;
    this.OtherInfo = flight.OtherInfo;
    this.Additional = flight.Additional;
    this.Airline = flight.Airline;
    this.Image = flight.Image;
    this.ArrHall = flight.ArrHall;
};

// Prototype Methods to give the flight objects methods to perform CRUD actions within the flights table in our flights database. 

//CREATE
Flight.create = (newFlight, result) => {

    //Format DATE and TIME to be handled by SQL DATE and TIME field

    //Format DATE to be handled by SQL DATE field, "03\/01\/2017" = '2017-03-01'
    const date = newFlight["Date"]
    const [month, day, year] = date.split("/")
    const formattedDate = `${year}-${month}-${day}`
    newFlight["Date"] = formattedDate;
    //Format TIME to be handled by SQL TIME field, "12:30" = "12:30:00"
    const time = newFlight["Time"];
    const [hours, minutes] = time.split(":");
    const formattedTime = `${hours}:${minutes}:00`;
    newFlight["Time"] = formattedTime;

    sql.query("INSERT INTO flights SET ?", newFlight, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created flight: ", { id: res.insertId, ...newFlight });
        result(null, { id: res.insertId, ...newFlight });
    });
};

//GET ONE
Flight.findById = (id, result) => {
    sql.query(`SELECT * FROM flights WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found flight: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Flight with the id
        result({ kind: "not_found" }, null);
    });
};

//GET ALL
Flight.getAll = (departures, arrivals, result) => {
    let query = "SELECT * FROM flights";

    if (departures) {
        query += `WHERE departure LIKE '%${departure}%'`;
    }

    if (arrivals) {
        query += `WHERE departure LIKE '%${arrival}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("flights: ", res);
        result(null, res);
    });
};

{
    "FlightNo": "AF1686",
    "Date": "2017-03-01",
    "Time": "12:30:00",
    "ArrDep": "D",
    "PortOfCallA": "PARIS C D G",
    "Status": "LANDED 1323",
    "OtherInfo": "NOW ON STAND",
    "Additional": "Baggage at carousel 2",
    "Airline": "Air France",
    "Image": "https://s3-eu-west-1.amazonaws.com/ediassets/img/airlines/AF.jpg",
    "ArrHall": "International"
  }

//Update
Flight.updateById = (id, flight, result) => {
    sql.query(
        "UPDATE flights SET FlightNo = ?, Date = ?, Time = ?, ArrDep = ?, PortOfCallA = ?, Status = ?, OtherInfo = ?, Additional = ?, Airline = ?, Image = ?, ArrHall = ? WHERE id = ?",
        [flight.FlightNo, flight.Date, flight.Time, flight.ArrDep, flight.PortOfCallA, flight.Status, flight.OtherInfo, flight.Additional, flight.Airline, flight.Image, flight.ArrHall, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Flight with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated flight: ", { id: id, ...flight });
            result(null, { id: id, ...flight });
        }
    );
};

// DELETE ONE
Flight.remove = (id, result) => {
    sql.query("DELETE FROM flights WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Flight with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted flight with id: ", id);
        result(null, res);
    });
};

// DELETE ALL
Flight.removeAll = result => {
    sql.query("DELETE FROM flights", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} flights`);
        result(null, res);
    });
};

// Flight.getAllDepartingFlights = (result, departure) => {
//   sql.query(`SELECT * FROM flights WHERE departure=${departure}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("flights: ", res);
//     result(null, res);
//   });
// };

module.exports = Flight;
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
Flight.getAll = (departure, arrival, result) => {
    let query = "SELECT * FROM flights";

    if (departure) {
        query += `WHERE departure LIKE '%${departure}%'`;
    }

    if (arrival) {
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
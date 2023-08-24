const sql = require("../db/db.js");

// Constructor Function

const Flight = function (flight) {
    this.flightNo = flight.flightNo;
    this.departure = flight.departure;
    this.destination = flight.destination;
    this.date = flight.date;
};

// Prototype Methods 

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

Flight.getAll = (departure, result) => {
    let query = "SELECT * FROM flights";

    if (departure) {
        query += ` WHERE departure LIKE '%${departure}%'`;
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

Flight.updateById = (id, flight, result) => {
    sql.query(
        "UPDATE flights SET title = ?, description = ?, published = ? WHERE id = ?",
        [flight.title, flight.description, flight.published, id],
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
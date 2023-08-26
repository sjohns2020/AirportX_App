const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

const pool = mysql.createPool({
  connectionLimit: 50, // Adjust the limit as needed
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = {
  query: (sql, params, callback) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting connection from pool:", err);
        return callback(err, null);
      }

      connection.query(sql, params, (queryErr, results) => {
        connection.release(); // Release the connection back to the pool
        if (queryErr) {
          console.error("Error executing query:", queryErr);
        }
        callback(queryErr, results);
      });
    });
  }
};

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
  
// });

// // open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// module.exports = connection;
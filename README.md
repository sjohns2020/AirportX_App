# AirportX_App

## BRIEF:

Using the included flights.json file, create an API using Node.js, Express and MySQL.  Also, create a simple React app to call the API and display the flights in a table that can be filtered.


Errors should be caught and handled.
The dates are strings in DD/MM/YYYY format. Is there a better solution?

## MVP:

- A user should be able to view a list of all flights
- A user should be able to view a list of all flight arrivals 
- A user should be able to view a list of all flight departures
- A user should be able to view more details of a single flight.
- A user should be able to sort thier view of flights, arrivals and departures based on time arriving or departing.
- Errors should be caught and handled.
- React app should be designed so that it can be scaled. Consider component hierarchy in the React App and the API routing structure. 




## EXTENSIONS:

- Refactor API to ensure it can be scaled if it were a production service
- The dates are strings in DD/MM/YYYY format. Is there a better solution?

ADVANCED EXTENSIONS:
- Add Authentication
- Add rate limiting to improve performance. 
- Perfect the frontend styling.

---

## Learnings:

- Using MySQL and implementing a relational database into a Node backend. I have used relational databases extensively in Django, Flask and Spring but have only used none relational databases like MongoDB in a node backend.
- Scaleability 
    - Implemented a reusable router in the server providing restful routing to any table.  This means we can add new tables to our database (e.g. crew members, passengers) and with only a few lines of code we can reuse the same router. 
    - Used well-constructed Component hierarchy on the react app to easily extend the application, adding new filters or adding new components for crew members and passengers. 

---

## SETUP + INSTALLATION

1 Git clone this repo locally.

2 Setup the Database 
- Check you have MySQL installed
    - terminal: mysql -V
- If it’s not installed
    - Installation instructions can be found [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/installing.html)
    - Mac - install with [Homebrew]()
- Create the database locally
    - Terminal: createdb flights
    - In the server create a database config file
        - Terminal: cd server
        - Terminal: touch config/db.config.js
        - Write and complete the following code in to your db.config.js
        - ```js
            module.exports = {
            HOST: "localhost",
            USER: "ENTER YOUR MYSQL USERNAME - this is 'root' as default",
            PASSWORD: "ENTER YOUR MYSQL PASSWORD",
            DB: "flights"
            };```

3 Start the Server (Node.js)
- terminal: cd server
- terminal: npm install
- terminal: npm run server:dev
- view the API in the [browser](http://localhost:8080/api/flights)

4 Start the Client (React)
- terminal: cd client
- terminal: npm i
- terminal: npm start
- View the react app in the [browser](http://localhost:3000/)

---

## MY PROCESS: 
- Relearned MySQL and installed it
- Built a test app to practice implementing MySQL into a node.js backend
    - Built the server to use Express, handle CORS and to run on port 8080.
    - Built the MySQL database and configured it.
    - Built the Flight constructor. 
    - Built methods on the Flight constructor (models/flights.model.js) to handle the CRUD functionality to handle:
        - Creating a flight and inserting it into the flights table in the flights database
        - Getting one flight from the flights table.
        - Getting all flights from the flights table.
        - Update a flight object in the flights table.
        - Deleting one flight from the flight table.
        - Deleting all flights from the flights table. 
    - Created a seeds_data.js file to:
        - hold flight JSON data 
        - Create flights table in the flights database
        - Creating flight objects from our JSON data and saving flight objects to the flights table in our database.
    - Created a reusable router.js file to handle endpoints for our app.  All restful routes and 3 custom routes: 
        - to get back all    departing flights
        - to get back all 
        arriving flights
        - to get back one flight by flight number.
    - Created a flight controller to handle the requests and responses from the client.
    - TESTING
    - Used Insomnia and mySQL workbench to test all created endpoints were working before building the frontend. 
- Used what I learned from building the test app to create the server for AiportX_app but refactored the Flight constructor to handle the full JSON data.
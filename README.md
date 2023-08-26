# AirportX_App

## Brief

Create a full stack app using React and Node.js to allow a user to view and filter a list of flight data. Using JSON flight data, create an API using Node.js, Express and MySQL.  Create a simple React app to call the API and display the flights in a table that can be filtered.

### MVP

- A user should be able to view a list of all flights
- A user should be able to view a list of all flight arrivals 
- A user should be able to view a list of all flight departures
- A user should be able to view more details of a single flight.
- A user should be able to sort thier view of flights, arrivals and departures based on time arriving or departing.
- Errors should be caught and handled.
- React app should be designed so that it can be scaled. Consider component hierarchy in the React App and the API routing structure. 

### Extensions

- Refactor API to ensure it can be scaled if it were a production service
- The dates are strings in DD/MM/YYYY format. Is there a better solution?

### Advanced Extensions
- Add Authentication
- Add rate limiting to improve performance. 
- Perfect the frontend styling.

<br><br>

# Learnings

- Using MySQL and implementing a relational database into a Node backend. I have used relational databases extensively in Django, Flask and Spring but have only used none relational databases like MongoDB in a node backend.
- Finding right SQL fields - Varchar(10), Date and Time over DATETIME and formating these. 
- Learned how to implement safeguards against SQL injection attacks in Node.js and MySQL
- Scaleability:
    - Implemented a reusable router in the server providing restful routing to any table.  This means we can add new tables to our database (e.g. crew members, passengers) and with only a few lines of code we can reuse the same router. 
    - Used well-constructed Component hierarchy on the react app to easily extend the application, adding new filters or adding new components for crew members and passengers. 


<br><br>

# SETUP + INSTALLATION

### 1 Git clone this repo locally

<br>

### 2 Setup the Database 
- Check you have MySQL installed
  ```sh 
        #terminal 
        mysql -V
    ```
- If it’s not installed
    - Installation instructions can be found [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/installing.html)
    - Mac - install with [Homebrew]()
- Create the database locally
    -   Enter the MySQL shell
        ```sh 
            #terminal
            mysql -u <your_username> -p 
        ```
    -   Create the flights Database
        ```sql 
            --MySQL shell
            CREATE DATABASE flights;

            SHOW DATABASES;

            EXIT;
        ```
    - In the server create a database config file
        - Create a folder inside the server folder called config and create a file inside config called db.config.js
            ```sh 
                #terminal 
                cd server

                touch config/db.config.js
            ```
        - Drop this code in to db.config.js and add your MySQL username and password
            ```js
            // server/config/db.config.js
            module.exports = {
            HOST: "localhost",
            USER: "ENTER YOUR MYSQL USERNAME - this is 'root' as default",
            PASSWORD: "ENTER YOUR MYSQL PASSWORD",
            DB: "flights"
            };
            ```
<br>

### 3 Start the Server
- Run the seeds file 
    ```sh 
        #terminal 
        cd server
    
        npm i

        npm run seeds

        npm run server:dev
    ```
- (Optional) Run Mocha and Chai tests to ensure the Flight model and API routes are working
    ```sh 
        #terminal
        npm run tests
    ```
- Run the server 
    ```sh 
        #terminal
        npm run server:dev
    ```
- View the backend Node API in the [browser](http://localhost:8080/api/flights)


<br>

### 4 Start the Client (React)
- ```sh 
        #terminal
        cd client

        npm i

        npm start
    ```
- View the frontend React app in the [browser](http://localhost:3000/)

<br><br>

# Flight API Documentation

There is no authentication for the Flight API

| Route | Endpoint | Desciption |
|-----------------|-----------------|-----------------|
| Find All Flights   | http://localhost:8080/api/flights  | Returns all Flights, can also return a filtered list using one or multiple Query Parameters, e.g. /api/flights[?airline=british&arrHall=domestic](http://localhost:8080/api/flights?airline=british&arrHall=domestic) |
| Find All Arrivals   | http://localhost:8080/api/flights/arrivals   | Returns all Arrival Flights, can also return a filtered list using one or multiple Query Parameters, e.g. flights/arrivals[?airline=british&arrHall=domestic](http://localhost:8080/api/flights/arrivals?airline=british&arrHall=domestic)   |
| Find All Departures   | http://localhost:8080/api/flights/departures   | Returns all Departure Flights, can also return a filtered list using one or multiple Query Parameters, e.g. flights/departures[?airline=british&arrHall=domestic](http://localhost:8080/api/flights/departures?airline=british&arrHall=domestic)    |
| Find Flight by FlightNo   | http://localhost:8080/api/flights/BA8926  | Returns one Flight  |
| Create Flight  | http://localhost:8080/api/flights  | Allows user to add a new flight  |
| Update Flight  | http://localhost:8080/api/flights/EI3672  | Allows user to update a Flight  |
| Delete One  | http://localhost:8080/api/flights/AF1686  | Allows user to delete a Flight   |
| Delete All  | http://localhost:8080/api/flights  | Allows user to delete all Flights  |


<br><br>

# My Process
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
- Added Mocha testing suite to unit test the Flight model
- Added Chai testing suite to test requests to the API.

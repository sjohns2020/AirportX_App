BRIEF - AirportX_App

Using the included flights.json file, create an API using Node.js, Express and MySQL.  Also, create a simple React app to call the API and display the flights in a table that can be filtered.


Errors should be caught and handled.
The dates are strings in DD/MM/YYYY format. Is there a better solution?

MVP:

- A user should be able to view a list of all flights
- A user should be able to view a list of all flight arrivals 
- A user should be able to view a list of all flight departures
- A user should be able to view more details of a single flight.
- A user should be able to sort thier view of flights, arrivals and departures based on time arriving or departing.
- Errors should be caught and handled.
- React app should be designed so that it can be scaled. Consider component hierarchy in the React App and the API routing structure. 




EXTENSIONS:

- Refactor API to ensure it can be scaled if it were a production service
- The dates are strings in DD/MM/YYYY format. Is there a better solution?

ADVANCED EXTENSIONS:
- Add Authentication
- Add rate limiting to improve performance. 
- Perfect the frontend styling.

Learnings:

- Using MySQL and implementing a relational database into a Node backend. I have used relational databases extensively in Django, Flask and Spring but have only used none relational databases like MongoDB in a node backend.
- Scaleability 
    - Implemented a reusable router in the server providing restful routing to any table.  This means we can add new tables to our database (e.g. crew members, passengers) and with only a few lines of code we can reuse the same router. 
    - Used well-constructed Component hierarchy on the react app to easily extend the application, adding new filters or adding new components for crew members and passengers. 


SETUP

1 Git clone this repo locally.

2 Setup the Database 
- Check you have MySQL installed
    - terminal: mysql -V
- If it’s not installed
    - Installation instructions can be found [here](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/installing.html)
    - Mac - install with [Homebrew]()
- Create the database locally
    - …Instructions to create database…

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






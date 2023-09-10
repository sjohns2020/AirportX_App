import React, { useState, useEffect } from 'react'
import Header from '../components/Header';
import FlightList from '../components/FlightList';
import ScrollToTop from '../components/scrollToTop';

const FlightContainer = () => {

    const [flights, setFlights] = useState([]);
    const [uniqueAirlines, setUniqueAirlines] = useState([]);
    const [searchError, setSearchError] = useState("");
    const [tab, setTab] = useState("getFlights");

    useEffect(() => {
        getFlights();
    }, [])


    // GET ALL FLIGHTS
    const getFlights = async (search) => {
        // If there is a search parameter
        if (search) {
            if (search["flightNo"]) {
                const searchTerm = search["flightNo"];
                const res = await fetch(`http://localhost:8080/api/flights?flightNo=${searchTerm}`);
                const flights = await res.json();
                if (flights.length > 0) {
                    setFlights(flights);
                    setSearchError("");
                    setTab("sortFlights");
                }
                else setSearchError(`There are no Flights matching this Flight Number: ${searchTerm}.  Please try again.`)
            }
            if (search["status"]) {
                const searchTerm = search["status"];
                const res = await fetch(`http://localhost:8080/api/flights?status=${searchTerm}`);
                const flights = await res.json();
                console.log(flights);
                setFlights(flights);
                setTab("sortFlights");
            }
            if (search["airline"]) {
                console.log("my airline " + search["airline"]);
                const searchTerm = search["airline"];
                const res = await fetch(`http://localhost:8080/api/flights?airline=${searchTerm}`);
                const flights = await res.json();
                console.log(flights);
                setFlights(flights);
                setTab("sortFlights");

            }
        }
        // If there is no search parameter GET ALL FLIGHTS
        else {
            const res = await fetch('http://localhost:8080/api/flights');
            const flights = await res.json();
            setFlights(flights);
            setTab("getFlights");
            getUniqueAirlines(flights);

        }
    }

    // GET ALL DEPARTURES
    const getDepartures = async () => {
        const res = await fetch('http://localhost:8080/api/flights/departures');
        const departures = await res.json();
        setFlights(departures);
    }

    // GET ALL ARRIVALS
    const getArrivals = async () => {
        const res = await fetch('http://localhost:8080/api/flights/arrivals');
        const arrivals = await res.json();
        setFlights(arrivals);
    }

    // SearchFlights handles any search for Flight Number 
    const searchFlight = async (search) => {
        if (search) {
            if (search["flightNo"]) {
                console.log(search["flightNo"]);
                for (const flight of flights) {
                    if (search["flightNo"] === flight.flightNo) {
                        const searchTerm = search["flightNo"];
                        const res = await fetch(`http://localhost:8080/api/flights/flight/${searchTerm}`);
                        const flight = await res.json();
                        setFlights([flight]);
                    }
                    else {
                        getFlights(search);
                    }
                }
            }
            if (search["airline"]) {
                getFlights(search);
            }
            else {
                getFlights(search);
            }
        }
        else {
            getFlights();
        }
    }

    // getUniqueAirlines handles the filters in the FilterBar component. Returns a unique list of airlines.
    const getUniqueAirlines = (allFlights) => {
        const uniqueFlightsByAirline = allFlights.reduce((accumulator, flight) => {
            // Check if the airline already exists in the accumulator
            const existingAirline = accumulator.find(item => item.airline === flight.airline);
            // If the airline exists, no need to add a duplicate entry
            if (existingAirline) {
                return accumulator;
            }
            // If the airline doesn't exist, add it to the accumulator
            return [...accumulator, flight];
        }, []);
        setUniqueAirlines(uniqueFlightsByAirline);
    }


    // sortFlights handles the sorting of the flight data being displayed from the headers in the flight list. 
    const sortFlights = (sortKey) => {
        const copiedFlights = [...flights];
        const sortedFlight = copiedFlights.sort((a, b) => {
            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        });

        setFlights(sortedFlight)
    };

    
    return (
        <div className="App">
            <Header />
            <main className="main">
                <ScrollToTop/>
                <FlightList flights={flights} getDepartures={getDepartures} getArrivals={getArrivals} getFlights={getFlights} sortFlights={sortFlights} searchFlight={searchFlight} searchError={searchError} setSearchError={setSearchError} tab={tab} setTab={setTab} uniqueAirlines={uniqueAirlines} />
            </main>
        </div>
    );
}

export default FlightContainer;
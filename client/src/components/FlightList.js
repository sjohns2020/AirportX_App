import FlightCard from "./flight/FlightCard";
import React, { useState } from 'react'
import FilterBar from "./search/FilterBar";
import SearchBar from "./search/SearchBar";

// Flights list reneters all flight data, search, filter and sort functionality
const FlightList = ({ flights, getDepartures, getArrivals, getFlights, sortFlights, searchFlight, searchError, setSearchError, tab, setTab, uniqueAirlines }) => {

    // Handles state to conditionally render the expansion of the flight card
    const [expand, setExpand] = useState("")


    // Toggles between each tab and fetches the correct flight data to display ( All flights, arrivals, departures, sorted data) 
    const toggleTab = (e) => {
        const value = e.target.getAttribute("data-tab")
        setTab(value)
        const props = { getDepartures, getArrivals, getFlights, sortFlights }
        if (props[value]) {
            props[value]()
        }
    }

    // Handles the column heading being clicked and sorts the flight data in the FlightContainer
    const sortByColumn = (e) => {
        sortFlights(e.target.value)
    }

    // Handles displaying a FlightCard component for each flight
    let flightList = flights.map((flight) => {
        return (
            <div className="table-row-container" key={flight.flightNo}>
                <FlightCard flight={flight} expand={expand} setExpand={setExpand} />
            </div>
        )
    })




    return (
        <main className="main">
            <div className="main-headings">
                <div data-tab="getFlights" onClick={toggleTab} className={tab === "getFlights" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content">Flights</h1>
                </div>
                <div data-testid="get-departures" data-tab="getDepartures" onClick={toggleTab} className={tab === "getDepartures" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content"  >Departures</h1>
                </div>
                <div data-testid="get-arrivals" onClick={toggleTab} data-tab="getArrivals" className={tab === "getArrivals" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content">Arrivals</h1>
                </div>
                <div onClick={toggleTab} data-tab="sortFlights" className={tab === "sortFlights" ? "main-flights-selected-search" : "main-flights-search"}>
                    <i className="fa-solid fa-magnifying-glass fa-2xl" data-tab="sortFlights"></i>
                    {tab === "sortFlights" &&
                        <div className="main-flights-selected-search" data-tab="sortFlights">
                            <h1 data-tab="sortFlights" ></h1>
                            <SearchBar searchFlight={searchFlight} />
                        </div>}
                </div>
            </div>
            <div className="table-search-container">
                <div className="table-container">
                    <div className="table">
                        {tab === "sortFlights" && <FilterBar searchFlight={searchFlight} setSearchError={setSearchError} uniqueAirlines={uniqueAirlines} />}

                        <div className="table-column" key="">
                            <div className="image">
                                <button className="button-sort" value="airline" onClick={sortByColumn}>AIRLINE</button>
                            </div>
                            <div className="time">
                                <button className="button-sort" value="time" onClick={sortByColumn}>TIME</button>
                            </div>
                            <div className="portOfCallA">
                                <button className="button-sort" value="portOfCallA" onClick={sortByColumn}>FLIGHT DETAILS</button>
                            </div>
                            <div className="status">
                                <button className="button-sort" value="status" onClick={sortByColumn}>STATUS</button>
                            </div>
                            <div className="more-details">
                                <button className="button-sort" >MORE DETAILS</button>
                            </div>

                        </div>
                        {flightList}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FlightList;
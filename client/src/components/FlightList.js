import FlightCard from "./flight/FlightCardMain";
import React, { useState } from 'react'
import SearchBarNew from "./search/ASearchBarNew";
import FilterBar from "./search/AFilterBar";

const FlightList = ({ flights, getDepartures, getArrivals, getFlights, sortFlights, searchFlight, searchError, setSearchError, tab, setTab, uniqueAirlines }) => {

    //use state to show clicked and then set the h1 classname accordingly
    const [expand, setExpand] = useState("")


    // Handlers for displaying if Flights or Tracked Flights are selected
    const toggleTab = (e) => {
        const value = e.target.getAttribute("data-tab")
        setTab(value)
        const props = { getDepartures, getArrivals, getFlights, sortFlights }
        if (props[value]) {
            props[value]()
        }
    }



    const sortByAirline = (e) => {
        sortFlights(e.target.value, tab)
    }

    let flightList = flights.map((flight) => {
        return (
            <div className="table-row-container" key={flight.flightNo}>
                <FlightCard flight={flight} expand={expand} setExpand={setExpand} />
            </div>
        )
    })



    return (
        <main className="main">
            {/* <SearchBar searchFlight={searchFlight} searchError={searchError} setSearchError={setSearchError} flights={flights} /> */}
            <div className="main-headings">
                <div data-tab="getFlights" onClick={toggleTab} className={tab === "getFlights" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content">All Flights</h1>
                </div>
                <div data-tab="getDepartures" onClick={toggleTab} className={tab === "getDepartures" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content"  >Departures</h1>
                </div>
                <div onClick={toggleTab} data-tab="getArrivals" className={tab === "getArrivals" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content">Arrivals</h1>
                </div>
                <div onClick={toggleTab} data-tab="sortFlights" className={tab === "sortFlights" ? "main-flights-selected-search" : "main-flights-search"}>
                    <i className="fa-solid fa-magnifying-glass fa-2xl" data-tab="sortFlights"></i>
                    {tab === "sortFlights" &&
                        <div className="main-flights-selected-search" data-tab="sortFlights">
                            <h1 data-tab="sortFlights" ></h1>
                            <SearchBarNew searchFlight={searchFlight} />
                        </div>}
                </div>
            </div>
            <div className="table-search-container">
                <div className="table-container">
                    <div className="table">
                        {tab === "sortFlights" && <FilterBar searchFlight={searchFlight} setSearchError={setSearchError} uniqueAirlines={uniqueAirlines} />  }

                        <div className="table-column" key="">
                            <div className="image">
                                <h5 value="airline" onClick={sortByAirline}>AIRLINE</h5>
                            </div>
                            <div className="time">
                                <h5>TIME</h5>
                            </div>
                            <div className="portOfCallA">
                                <h5>FLIGHT DETAILS</h5>
                            </div>
                            <div className="status">
                                <h5>STATUS</h5>
                            </div>
                            <div className="more-details">
                                <h5>MORE DETAILS</h5>
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
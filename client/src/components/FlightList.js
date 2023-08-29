import FlightCard from "./flight/FlightCardMain";
import React, { useState } from 'react'
import FilterBar from "./search/FilterBar";
import SearchBar from "./search/SearchBar";

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



    const sortByColumn = (e) => {
        sortFlights(e.target.value)
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
            <div className="main-headings">
                <div data-tab="getFlights" onClick={toggleTab} className={tab === "getFlights" ? "main-flights-selected" : "main-flights"}>
                    <h1 className="main-flights-content">Flights</h1>
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
                            <SearchBar searchFlight={searchFlight} />
                        </div>}
                </div>
            </div>
            <div className="table-search-container">
                <div className="table-container">
                    <div className="table">
                        {tab === "sortFlights" && <FilterBar searchFlight={searchFlight} setSearchError={setSearchError} uniqueAirlines={uniqueAirlines} />  }

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
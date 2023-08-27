import FlightCard from "./flightCard";
import React, { useState } from 'react'

const Main = ({ flights, getDepartures, getArrivals, getFlights, sortFlights }) => {

    //use state to show clicked and then set the h1 classname accordingly
    const [tab, setTab] = useState("getFlights")

    // Handlers for displaying if Flights or Tracked Flights are selected
    const toggleTab = (e) => {
        const value = e.target.getAttribute("data-tab")
        setTab(value)
        const props = {getDepartures, getArrivals, getFlights, sortFlights}
        if (props[value]) {
            props[value]()
        }
    }

    const handleSubmit = (e) => {
        console.log("hi")
    }

    const sortByAirline = (e) => {
        sortFlights(e.target.value, tab)
    }

    let flightList = flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight} />
    })

    return (
        <main className="main">
            <div className="main-headings">
                <div className={tab === "getFlights" ? "main-flights-selected" : "main-flights"}>
                    <h1 data-tab="getFlights" onClick={toggleTab}>All Flights</h1>
                </div>
                <div className={tab === "getDepartures" ? "main-flights-selected" : "main-flights"}>
                    <h1 data-tab="getDepartures" onClick={toggleTab}>Departures</h1>
                </div>
                <div className={tab === "getArrivals" ? "main-flights-selected" : "main-flights"}>
                    <h1 data-tab="getArrivals" onClick={toggleTab}>Arrivals</h1>
                </div>
                <div className={tab === "displayFindById" ? "main-flights-selected" : "main-flights"}>
                    <h1 data-tab="displayFindById" onClick={toggleTab}>Search</h1>
                </div>
            </div>
            <div className="table-search-container">
                <div className="table-container">
                    <div className="table">

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
                        <div className="table-row-container">
                        {flightList}
                        </div>

                    </div>
                </div>
                {tab === "find" ?
                    <div className="search-bar">
                        <form onSubmit={handleSubmit}>
                            <label for="search">Enter Flight Number</label>
                            <input id="search" type="text" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    : null}
            </div>
        </main>

    );
}

export default Main;
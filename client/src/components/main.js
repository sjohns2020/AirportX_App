import FlightCard from "./flightCard";
import React, { useState } from 'react'

const Main = ({ flights, getDepartures, getArrivals, getFlights }) => {

    //use state to show clicked and then set the h1 classname accordingly
    const [tab, setTab] = useState("flights")

    // Handlers for displaying if Flights or Tracked Flights are selected
    const displayAllFlights = () => {
        setTab("flights")
        getFlights()
    }

    const displayDepartures = () => {
        setTab("departures")
        getDepartures()
    }

    const displayArrivals = () => {
        setTab("arrivals")
        getArrivals()
    }

    const displayFindById = () => {
        setTab("find")
    }

    const handleSubmit = (e) => {
        console.log("hi")
    }

    let flightList = flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight} />
    })

    return (
        <main className="main">
            <div className="main-headings">
                <div className={tab === "flights" ? "main-flights-selected" : "main-flights"}>
                    <h1 onClick={displayAllFlights}>All Flights</h1>
                </div>
                <div className={tab === "departures" ? "main-flights-selected" : "main-flights"}>
                    <h1 onClick={displayDepartures}>Departures</h1>
                </div>
                <div className={tab === "arrivals" ? "main-flights-selected" : "main-flights"}>
                    <h1 onClick={displayArrivals}>Arrivals</h1>
                </div>
                <div className={tab === "find" ? "main-flights-selected" : "main-flights"}>
                    <h1 onClick={displayFindById}>Search</h1>
                </div>
            </div>
            <div className="table-search-container">
                <div className="table-container">
                    <table className="table">
                        <tr className="table-column" key="">
                            <th>Airline</th>
                            <th>Time</th>
                            <th>Flight Details</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                        <tbody>
                            {flightList}
                        </tbody>
                    </table>
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
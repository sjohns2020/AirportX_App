import FlightCard from "./flightCard";
import React, { useState } from 'react'

const Main = ({ flights }) => {

    //use state to show clicked and then set the h1 classname accordingly
    const [showFlights, setShowFlights] = useState(true)
    const [showTrackedFlights, setShowTrackedFlights] = useState(false)

    
    // Handlers for displaying if Flights or Tracked Flights are selected
    const displayFlights = () => {
        setShowFlights(true)
        setShowTrackedFlights(false)
    }

    const displayTracked = () => {
        setShowFlights(false)
        setShowTrackedFlights(true)
    }

    //Show flight list depending on whether Flights or TrackedFlights are selected
    let flightList = flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight} />
    })
    if (showTrackedFlights) {
        flightList = flights.map((flight) => {
            return <FlightCard key={flight.id} flight={flight} />
        })
    }

    return (
        <main className="main">
            <div className="main-headings">
                <h1 onClick={displayFlights} className={showFlights ? "main-flights-selected" : "main-flights"}>Flights</h1>
                <h1 onClick={displayTracked} className={showTrackedFlights ? "main-flights-selected" : "main-flights"}>Tracked Flights</h1>
            </div>
            <table className="table">
                <tr className="table-column" key="">
                    <th>Flight No</th>
                    <th>Departure Airport</th>
                    <th>Destination Airport</th>
                    <th>Time</th>
                </tr>
                {flightList}
            </table>
        </main>
    );
}

export default Main;
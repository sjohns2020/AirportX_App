import FlightCard from "./flightCard";
import React, { useState } from 'react'

const Main = ({ flights }) => {

    //use state to show clicked and then set the h1 classname accordingly
    const [showFlights, setShowFlights] = useState(true)
    const [showDepartures, setShowDepartures] = useState(false)
    const [showArrivals, setShowArrivals] = useState(false)
    const [showFindById, setShowFindById] = useState(false)

    
    // Handlers for displaying if Flights or Tracked Flights are selected
    const displayAllFlights = () => {
        setShowFlights(true)
        setShowDepartures(false)
        setShowArrivals(false)
        setShowFindById(false)
    }

    const displayDepartures = () => {
        setShowFlights(false)
        setShowDepartures(true)
        setShowArrivals(false)
        setShowFindById(false)
    }

    const displayArrivals = () => {
        setShowFlights(false)
        setShowDepartures(false)
        setShowArrivals(true)
        setShowFindById(false)
    }

    const displayFindById= () => {
        setShowFlights(false)
        setShowDepartures(false)
        setShowArrivals(false)
        setShowFindById(true)
    }

    const handleSubmit = (e) => {
      console.log("hi")
    }

    //Show flight list depending on whether Flights or TrackedFlights are selected
    let flightList = flights.map((flight) => {
        return <FlightCard key={flight.id} flight={flight} />
    })
    if (showDepartures) {
        flightList = flights.map((flight) => {
            return <FlightCard key={flight.id} flight={flight} />
        })
    }

    return (
        <main className="main">
            <div className="main-headings">
                <div className={showFlights ? "main-flights-selected" : "main-flights"}>
                <h1 onClick={displayAllFlights}>All Flights</h1>
                </div>
                <div className={showDepartures ? "main-flights-selected" : "main-flights"}>
                <h1 onClick={displayDepartures}>Departures</h1>
                </div>
                <div className={showArrivals ? "main-flights-selected" : "main-flights"}>
                <h1 onClick={displayArrivals}>Arrivals</h1>
                </div>
                <div className={showFindById ? "main-flights-selected" : "main-flights"}>
                <h1 onClick={displayFindById}>Search</h1>
                {showFindById ? 
                <form onSubmit={handleSubmit}>
                <label for="search">Enter Flight Number</label>
                    <input id="search" type="text" />
                </form>
                : null}
                </div>
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
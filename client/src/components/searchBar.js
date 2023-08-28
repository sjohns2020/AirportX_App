import React, { useState } from 'react';

const SearchBar = ({ searchFlight, searchError, setSearchError, flights }) => {

    const [searchFlightNo, setSearchFlightNo] = useState(null)

    const handleFlightNoChange = (e) => {
        setSearchFlightNo(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const search = {
            flightNo: searchFlightNo,
        }
        searchFlight(search)
    }


    const handleFlightStatusChange = (e) => {
        let searchStatus = e.target.value
        const search = {
            status: searchStatus
        }
        console.dir(e)
        searchFlight(search)
        if (searchStatus === "LAST") {
            searchStatus = "LAST CALL"
        }
        if (searchStatus === "GATE") {
            searchStatus = "GATE CLOSED"
        }
        setSearchError("Showing all flights for: " + searchStatus)
    }

    const resetSearch = () => {
        searchFlight()
    }


    const uniqueFlightsByAirline = flights.reduce((accumulator, flight) => {
        // Check if the airline already exists in the accumulator
        const existingAirline = accumulator.find(item => item.airline === flight.airline);
        // If the airline exists, no need to add a duplicate entry
        if (existingAirline) {
            return accumulator;
        }
        // If the airline doesn't exist, add it to the accumulator
        return [...accumulator, flight];
    }, []);

    const airlines = uniqueFlightsByAirline.map((flight) => {
        // get first word in airline to search with
        let searchTerm = flight.airline
        if (searchTerm.includes(' ')) {
            const array = searchTerm.split(' ')
            searchTerm = array[0]
        }
        return (
            <img key={flight.flightNo} src={flight.image} alt={flight.airline} onClick={() => { searchFlight({ airline: searchTerm }); setSearchError("Showing all flights for: " + flight.airline) }} />
        )
    })



    return (
        <div className="search-bar">
            <h1>Search By:</h1>
            <h3>Flight Number</h3>
            <form onSubmit={handleSubmit} className="search-status">
                <label htmlFor="search">Enter Flight Number: </label>
                <input id="search" type="text" onChange={handleFlightNoChange} />
                <button type="submit">Search</button>
            </form>
            <div>
                <h3>Flight Status</h3>
                <div className="search-status">
                    <button value="AIRBORN" onClick={handleFlightStatusChange} className="fa-solid fa-plane-departure"></button>
                    <button value="LANDED" onClick={handleFlightStatusChange} className="fa-solid fa-plane-arrival"></button>
                    <button value="TAXIED" onClick={handleFlightStatusChange} className="fa-solid fa-taxi"></button>
                    <button value="GATE" onClick={handleFlightStatusChange} className="fa-solid fa-rectangle-xmark"></button>
                    <button value="EXPECTED" onClick={handleFlightStatusChange} className="fa-solid fa-clock"></button>
                    <button value="SCHEDULED" onClick={handleFlightStatusChange} className="fa-regular fa-clock"></button>
                    <button value="LAST" onClick={handleFlightStatusChange} className="fa-solid fa-person-walking-dashed-line-arrow-right"></button>
                    <button value="ESTIMATED" onClick={handleFlightStatusChange} className="fa-regular fa-hourglass-half"></button>
                </div>
                <h3>Flight Airlines</h3>
                <div className="search-airlines">
                    {airlines}
                </div>
                {searchError && <p>{searchError}</p>}
                <button onClick={resetSearch}>Reset Search</button>
            </div>
        </div>

    );
}

export default SearchBar;
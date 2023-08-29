import React, { useState } from 'react';

const SearchBar= ({ searchFlight }) => {

    // State for the inputted flight number
    const [searchFlightNo, setSearchFlightNo] = useState(null)

    // Sets searchFlightNo state when the input is changed
    const handleFlightNoChange = (e) => {
        setSearchFlightNo(e.target.value)
    }

    // Handler for the search form to be submitted.  Sends the search term as an object so that it is open to extention for more searches to be added.
    const handleSubmit = (e) => {
        e.preventDefault()
        const search = {
            flightNo: searchFlightNo,
        }
        searchFlight(search)
    }


    return (
        <form onSubmit={handleSubmit} data-tab="sortFlights">
            <input
                id="search"
                type="text"
                className="input-field"
                onChange={handleFlightNoChange}
                placeholder="Search Flight No..."
                data-tab="sortFlights"
            />
            <button type="submit" className="submit-button" data-tab="sortFlights">
                Search
            </button>
        </form>
    );
}

export default SearchBar;
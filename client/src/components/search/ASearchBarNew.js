import React, { useState } from 'react';

const SearchBarNew = ({ searchFlight }) => {


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

export default SearchBarNew;
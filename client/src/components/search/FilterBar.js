// Only displayed when the search header is selected and displays flight status icons and airline images that when selected will filter the flight data
const FilterBar = ({ searchFlight, setSearchError, uniqueAirlines }) => {

    // Handles the flight status icon button being pressed and triggers searchFlights function in the  flightContainer
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

    // ailines, when rendered shows an array to img tags for each 'unique' airline to have an up to date selection of current airlines to filter by.
    const airlines = uniqueAirlines.map((flight) => {
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
        <div className="filter-container">
            <div className="filter-status">
                <div className="search-status">
                    <div className="filter-split">
                        <div className="status-button">
                            <button value="AIRBORN" onClick={handleFlightStatusChange}>
                                <p className="fa-solid fa-plane-departure"></p>
                                <p>Airborn</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button data-testid="get-airborn" value="LANDED" onClick={handleFlightStatusChange}>
                                <p className="fa-solid fa-plane-arrival"></p>
                                <p>Landed</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button value="TAXIED" onClick={handleFlightStatusChange}>
                                <p className="fa-solid fa-taxi"></p>
                                <p>Taxied</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button value="GATE" onClick={handleFlightStatusChange}>
                                <p className="fa-solid fa-rectangle-xmark"></p>
                                <p>Gate Closed</p>
                            </button>
                        </div>
                    </div>
                    <div className="filter-split">
                        <div className="status-button">
                            <button value="EXPECTED" onClick={handleFlightStatusChange} >
                                <p className="fa-solid fa-clock"></p>
                                <p>Expected</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button value="SCHEDULED" onClick={handleFlightStatusChange}>
                                <p className="fa-regular fa-clock"></p>
                                <p>Sheduled</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button value="LAST" onClick={handleFlightStatusChange}>
                                <p className="fa-solid fa-person-walking-dashed-line-arrow-right"></p>
                                <p>Last Call</p>
                            </button>
                        </div>
                        <div className="status-button">
                            <button value="ESTIMATED" onClick={handleFlightStatusChange}>
                                <p className="fa-regular fa-hourglass-half"></p>
                                <p>Estimated</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="filter-airlines">
                <div className="search-airlines">
                    {airlines}
                </div>
            </div>

        </div>
    );
}

export default FilterBar;
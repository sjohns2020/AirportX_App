const ExpandedSearchBar = ({ handleSubmit, handleFlightNoChange, handleFlightStatusChange, searchError, resetSearch, airlines, toggleSearchBar }) => {
    return (
        <div className="search-bar-extended" >
            <div className="search-logo" onClick={toggleSearchBar}>
                <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
                {searchError && <h1>{searchError}</h1>}
            </div>
            <div className="search-bar-container">
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
                    <button onClick={resetSearch}>Clear Filters</button>
                </div>
            </div>
        </div>
    );
}

export default ExpandedSearchBar;
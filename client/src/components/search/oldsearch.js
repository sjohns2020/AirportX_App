// import React, { useState } from 'react';
// import ExpandedSearchBar from './ExpandedSearchBar';

// const SearchBar = ({ searchFlight, searchError, setSearchError, flights }) => {

//     const [searchFlightNo, setSearchFlightNo] = useState(null)
//     const [expandSearchBar, setExpandSearchBar] = useState(false)

//     const handleFlightNoChange = (e) => {
//         setSearchFlightNo(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const search = {
//             flightNo: searchFlightNo,
//         }
//         searchFlight(search)
//     }


//     const handleFlightStatusChange = (e) => {
//         let searchStatus = e.target.value
//         const search = {
//             status: searchStatus
//         }
//         console.dir(e)
//         searchFlight(search)
//         if (searchStatus === "LAST") {
//             searchStatus = "LAST CALL"
//         }
//         if (searchStatus === "GATE") {
//             searchStatus = "GATE CLOSED"
//         }
//         setSearchError("Showing all flights for: " + searchStatus)
//     }

//     const resetSearch = () => {
//         searchFlight()
//     }

//     const toggleSearchBar = () => {
//         setExpandSearchBar(!expandSearchBar)
//     }



//     const uniqueFlightsByAirline = flights.reduce((accumulator, flight) => {
//         // Check if the airline already exists in the accumulator
//         const existingAirline = accumulator.find(item => item.airline === flight.airline);
//         // If the airline exists, no need to add a duplicate entry
//         if (existingAirline) {
//             return accumulator;
//         }
//         // If the airline doesn't exist, add it to the accumulator
//         return [...accumulator, flight];
//     }, []);

//     const airlines = uniqueFlightsByAirline.map((flight) => {
//         // get first word in airline to search with
//         let searchTerm = flight.airline
//         if (searchTerm.includes(' ')) {
//             const array = searchTerm.split(' ')
//             searchTerm = array[0]
//         }
//         return (
//             <img key={flight.flightNo} src={flight.image} alt={flight.airline} onClick={() => { searchFlight({ airline: searchTerm }); setSearchError("Showing all flights for: " + flight.airline) }} />
//         )
//     })



//     return (
//         <>
//             {!expandSearchBar
//                 ?
//                 <div className="search-bar"  >
//                     <div className="search-logo" onClick={toggleSearchBar}>
//                         <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
//                         <h1>Search...</h1>
//                     </div>
//                 </div>
//                 :
//                 <ExpandedSearchBar handleSubmit={handleSubmit} handleFlightNoChange={handleFlightNoChange} handleFlightStatusChange={handleFlightStatusChange} searchError={searchError} resetSearch={resetSearch} airlines={airlines} toggleSearchBar={toggleSearchBar} />
//             }


//         </>

//     );
// }

// export default SearchBar;
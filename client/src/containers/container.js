import React, { useState, useEffect } from 'react'
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

const Container = () => {

    const [flights, setFlights] = useState([])

    useEffect(() => {
        getFlights()
    }, [])


    //Get all flights
    const getFlights = async () => {
        const res = await fetch('http://localhost:8080/api/flights/')
        const flights = await res.json()
        setFlights(flights)
    }

    // Get all Departures
    const getDepartures = async () => {
        const res = await fetch('http://localhost:8080/api/flights/departures')
        const departures = await res.json()
        setFlights(departures)
    }

    // Get all Arrivals
    const getArrivals = async () => {
        const res = await fetch('http://localhost:8080/api/flights/arrivals')
        const arrivals = await res.json()
        setFlights(arrivals)
    }

    const sortFlights = (sortKey, tab) => {
      console.log(sortKey, tab)
    }

return (
    <div className="App">
        <Header />
        <main className="main">
            <Main flights={flights} getDepartures={getDepartures} getArrivals={getArrivals} getFlights={getFlights} sortFlights={sortFlights} />
        </main>
        {/* <Footer /> */}
    </div>
);
}

export default Container;
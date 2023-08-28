import React, { useState, useEffect } from 'react'
import Header from '../components/header';
import Main from '../components/main';

const Container = () => {

    const [flights, setFlights] = useState([])
    const [searchError, setSearchError] = useState("")
    const [tab, setTab] = useState("getFlights")

    useEffect(() => {
        getFlights()
    }, [])


    //Get all flights
    const getFlights = async (search) => {
        if (search) {
            if (search["flightNo"]) {
                const searchTerm = search["flightNo"]
                const res = await fetch(`http://localhost:8080/api/flights?flightNo=${searchTerm}`)
                const flights = await res.json()
                if (flights.length > 0) {
                    setFlights(flights)
                    setSearchError("")
                    setTab("getFlights")
                }
                else setSearchError(`There are no Flights matching this Flight Number: ${searchTerm}.  Please try again.`)
            }
            if (search["status"]) {
                const searchTerm = search["status"]
                const res = await fetch(`http://localhost:8080/api/flights?status=${searchTerm}`)
                const flights = await res.json()
                console.log(flights)
                setFlights(flights)
                setTab("getFlights")
            }
            if (search["airline"]) {
                console.log("my airline " + search["airline"])
                const searchTerm = search["airline"]
                const res = await fetch(`http://localhost:8080/api/flights?airline=${searchTerm}`)
                const flights = await res.json()
                console.log(flights)
                setFlights(flights)
                setTab("getFlights")

            }
        }
        else {
            const res = await fetch('http://localhost:8080/api/flights')
            const flights = await res.json()
            setFlights(flights)
            setTab("getFlights")
        }
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

    const searchFlight = async (search) => {
        if (search) {
        if (search["flightNo"]) {
            console.log(search["flightNo"])
            for (const flight of flights) {
                if (search["flightNo"] === flight.flightNo) {
                    const searchTerm = search["flightNo"]
                    const res = await fetch(`http://localhost:8080/api/flights/flight/${searchTerm}`)
                    const flight = await res.json()
                    setFlights([flight])
                }
                else {
                    getFlights(search)
                }
            }
        }
        if (search["airline"]) {
            console.log(search["status"])
            getFlights(search)
        }
        else {
            console.log(search["status"])
            getFlights(search)
        }
    }
    else {
        getFlights()
    }


    }

    const sortFlights = (sortKey, tab) => {
        console.log(sortKey, tab)
    }



    return (
        <div className="App">
            <Header />
            <main className="main">
                <Main flights={flights} getDepartures={getDepartures} getArrivals={getArrivals} getFlights={getFlights} sortFlights={sortFlights} searchFlight={searchFlight} searchError={searchError} setSearchError={setSearchError} tab={tab} setTab={setTab} />
            </main>
        </div>
    );
}

export default Container;
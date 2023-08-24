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




    return (
        <div className="App">
            <Header />
            <main className="main">
                <Main flights={flights} />
            </main>
            <Footer />
        </div>
    );
}

export default Container;
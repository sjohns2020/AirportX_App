
import DetailedFlightCard from "./DetailedFlightCard";
import SimpleFlightCard from "./SimpleFlightCard";

// FlightCard renders each row in the flight list table 
const FlightCard = ({ flight, expand, setExpand }) => {


    // Handles Formatting Time to display on the page removing the last :00
    const [hours, minutes] = flight.time.split(":").slice(0, 2);
    const formattedTime = `${hours}:${minutes}`;

    // Toggle between simple and detailled view of only the particular flight card
    const showMoreDetail = () => {
        setExpand(flight.flightNo);
    }
    const showLessDetail = () => {
        setExpand("");
    }


    // Had to use a fragment here as return expects JSX and not a ternary.
    return (
        <>
            {expand === flight.flightNo ?
                <DetailedFlightCard flight={flight} showLessDetail={showLessDetail} formattedTime={formattedTime} />
                :
                <SimpleFlightCard flight={flight} showMoreDetail={showMoreDetail} formattedTime={formattedTime}/>
            }
        </>


    );
}

export default FlightCard;

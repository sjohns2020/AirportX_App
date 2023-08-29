
import DetailedFlightCard from "./DetailedFlightCard";
import SimpleFlightCard from "./SimpleFlightCard";

const FlightCard = ({ flight, expand, setExpand }) => {


    // Formatting Time
    const [hours, minutes] = flight.time.split(":").slice(0, 2);
    const formattedTime = `${hours}:${minutes}`;


    // ROUTER TO SHOW ONE PAGE
    const moreDetails = () => {
        console.log("hi")
    }

    // Toggle between simple and detailled view
    const showMoreDetail = () => {
        setExpand(flight.flightNo)
    }

    const showLessDetail = () => {
        setExpand("")
    }



    return (
        <>
            {expand === flight.flightNo ?
                <DetailedFlightCard flight={flight} showLessDetail={showLessDetail} formattedTime={formattedTime} moreDetails={moreDetails} />
                :
                <SimpleFlightCard flight={flight} showMoreDetail={showMoreDetail} formattedTime={formattedTime} moreDetails={moreDetails} />
            }
        </>


    );
}

export default FlightCard;

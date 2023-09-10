// FlightDetails renders a more detailled version of the flight information row when a flight card is selected
import FlightDetails from "./FlightDetails";

const DetailedFlightCard = ({ flight, showLessDetail, formattedTime }) => {

    return (
        <div className="table-row-exp" onClick={showLessDetail}>
            <div className="table-row-expanded" >
                <div className="image">
                    <img src={flight.image} alt={flight.airline}></img>
                </div>
                <div className="time">
                    <p>{formattedTime}</p>
                </div>
                <div className="portOfCallA">
                    <h5>{flight.portOfCallA}</h5>
                    <div className="flightDetails">
                        <h3>{flight.flightNo}</h3>
                        <p>{'\u0020'}{flight.airline}</p>
                    </div>
                </div>
                <div className="status">
                    <p>{flight.status}</p>
                </div>
                <div className="more-details">
                    <p>{'\u2190' + '\u0020'}Show Less</p>
                </div>
            </div>
            <FlightDetails flight={flight} />

        </div>
    );
}

export default DetailedFlightCard;
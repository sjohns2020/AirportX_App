const FlightCard = ({ flight }) => {

    // Formatting Date
    const originalDate = new Date(flight.date);
    const dateFormatter = new Intl.DateTimeFormat("en", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    const formattedDate = dateFormatter.format(originalDate);

    // Formatting Time
    const [hours, minutes] = flight.time.split(":").slice(0, 2);
    const formattedTime = `${hours}:${minutes}`;

    const moreDetails = () => {
        console.log("hi")
    }

    return (
        <div className="table-row">
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
                <p onClick={moreDetails}>More Details{'\u0020' + '\u2192'}</p>
            </div>

        </div>

    );
}

export default FlightCard;

const SimpleFlightCard = ({ flight, showMoreDetail, formattedTime, moreDetails, icon }) => {

    return (
        <div className="table-row" onClick={showMoreDetail}>
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
                <p onClick={moreDetails}>Show More{'\u0020' + '\u2192'}</p>
            </div>
        </div>
    );
}

export default SimpleFlightCard;
const FlightCard = ({flight}) => {
    return ( 
        <tr className="table-row">
            <td>{flight.flightNo}</td>
            <td>{flight.departure}</td>
            <td>{flight.destination}</td>
            <td>{flight.date}</td>
        </tr>
     );
}
 
export default FlightCard;
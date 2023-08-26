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
        <tr className="table-row">
            <td><img src={flight.image} alt={flight.airline}></img></td>
            <td>{formattedTime}</td>
            <td><bold>{flight.portOfCallA}</bold><br/>{flight.flightNo}{'\u0020'}{flight.airline}</td>
            <td>{flight.status}</td>
            <td><p onClick={moreDetails}>More Details{'\u0020'+'\u2192'} </p></td>
        </tr>
    );
}

export default FlightCard;

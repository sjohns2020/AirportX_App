const FlightDetails = ({ flight }) => {

    // Formatting Time
    const [hours, minutes] = flight.time.split(":").slice(0, 2);
    const formattedTime = `${hours}:${minutes}`;


    return (
        <div className="table-row-expanded-container">
            <div className="table-row-expanded-table">

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        <p>Airline</p>
                    </div>
                    <div className="table-row-expanded-row-data">
                        <p>{flight.airline}</p>
                    </div>
                </div>

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        <p>Time</p>
                    </div>
                    <div className="table-row-expanded-row-data">
                        {flight.arrDep === "A"
                            ? <p>Arriving at {formattedTime}</p>
                            : <p>Departing at {formattedTime}</p>}
                    </div>
                </div>

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        <p>Flight No</p>
                    </div>
                    <div className="table-row-expanded-row-data">
                        <p>{flight.flightNo}</p>
                    </div>
                </div>

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        {flight.arrDep === "A"
                            ? <p>From</p>
                            : <p>To</p>}
                    </div>
                    <div className="table-row-expanded-row-data">
                        <p>{flight.portOfCallA}</p>
                    </div>
                </div>

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        <p>Status</p>
                    </div>
                    <div className="table-row-expanded-row-data">
                        <p>{flight.status}</p>
                    </div>
                </div>

                <div className="table-row-expanded-row">
                    <div className="table-row-expanded-row-title">
                        <p>Info</p>
                    </div>
                    <div className="table-row-expanded-row-data">
                        {flight.otherInfo || flight.additional
                            ? <p>{flight.otherInfo}<br />{flight.additional}</p>
                            : <p>No Update</p>
                        }
                    </div>
                </div>





            </div>
        </div>
    );
}

export default FlightDetails;
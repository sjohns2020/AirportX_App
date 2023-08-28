import image from '../images/edinburgh_airport.svg'

const Header = () => {


    return (
        <header className="header">
            <h1 className="title-container">Arrivals & Departures</h1>
            <i class="fa-solid fa-plane-departure"></i>
            <i class="fa-solid fa-plane-arrival"></i>
            <i class="fa-solid fa-taxi"></i>
            <i class="fa-solid fa-rectangle-xmark"></i>
            <i class="fa-solid fa-clock"></i>
            <i class="fa-regular fa-clock"></i>
            <i class="fa-solid fa-person-walking-dashed-line-arrow-right"></i>
            <i class="fa-regular fa-hourglass-half"></i>

        
            <section>
                {/* <nav className="nav">
                    <div className="nav-link">
                        <a href="/">
                            <h1>Flights</h1>
                        </a>
                    </div>
                    <div className="nav-link">
                        <a href="/">
                            <h1>Tracked Flights</h1>
                        </a>
                    </div>
                </nav> */}
                <div className="logo-container">
                    <img className="logo" src={image} alt="Logo" />
                </div>
            </section>
        </header>
    );
}

export default Header;
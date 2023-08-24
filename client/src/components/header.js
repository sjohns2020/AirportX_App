import image from '../images/edinburgh_airport.svg'

const Header = () => {
    return (
        <header className="header">
            <h1 className="title-container">Flight Tracker</h1>
            <section>
                <nav className="nav">
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
                </nav>
                <div className="logo-container">
                    <img className="logo" src={image} alt="Logo" />
                </div>
            </section>
        </header>
    );
}

export default Header;
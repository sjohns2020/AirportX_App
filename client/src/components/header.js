import image from '../images/edinburgh_airport.svg'

const Header = () => {

    return (
        <header className="header">
            <h1 data-testid="get-header" className="title-container">Arrivals & Departures</h1>

            <section>
                <div className="logo-container">
                    <img className="logo" src={image} alt="Logo" />
                </div>
            </section>
        </header>
    );
}

export default Header;
const SearchBar = () => {

    const handleSubmit = (e) => {
        console.log("hi")
    }

    return ( 
        <div className="search-bar">
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Enter Flight Number</label>
                <input id="search" type="text" />
                <button type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default SearchBar;
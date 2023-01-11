const SearchBar = ({search, onChange, onSubmit}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(search);
    }
    return (
        <form onSubmit={handleSearch}>
            <label htmlFor="search">Search :</label>
            <input type="text" value={search} onChange={onChange}/>
            <button type="submit">Go Search</button>
        </form>
    )
}

export default SearchBar;
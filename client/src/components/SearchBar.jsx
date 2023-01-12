const SearchBar = ({search, onChange, onSubmit}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(search);
    }
    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={search} onChange={onChange} placeholder="Brigitte Macron"/>
        </form>
    )
}

export default SearchBar;
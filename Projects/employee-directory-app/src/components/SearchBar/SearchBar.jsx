function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search Employee..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;
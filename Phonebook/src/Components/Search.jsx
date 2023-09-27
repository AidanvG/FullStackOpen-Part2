const Search = ({handleSearchChange, search}) => (
    <div>filter shown with<input type="text" onChange={handleSearchChange} value={search} /></div>
)

export default Search;
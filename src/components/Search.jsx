import {useState} from "react";

const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props;

    const [query, getQuery] = useState('');
    const [type, getType] = useState('all');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchMovies(query, type)
        }
    }

    const handleClick = (event) => {
        event.preventDefault();
        searchMovies(query, type)
    }

    const handleFilter = (event) => {
        getType(event.target.value);
        searchMovies(query, event.target.value);
    }

    return (
        <form className="search">
            <div className="wrapper">
                <input
                    className="search_field"
                    id="searchField"
                    type="search"
                    placeholder="Search"
                    value={query}
                    onChange={event => getQuery(event.target.value)}
                    onKeyDown={handleKey}
                />
                <button className="search_btn" onClick={handleClick} type="submit">Search</button>
            </div>
            <div className="search_filters">
                <label htmlFor="all">
                    <input
                        className="with-gap"
                        id="all"
                        type="radio"
                        name="type"
                        value="all"
                        onChange={handleFilter}
                        checked={type === "all"}
                    />
                    <span>All</span>
                </label>
                <label htmlFor="movies">
                    <input
                        className="with-gap"
                        id="movies"
                        type="radio"
                        name="type"
                        value="movie"
                        onChange={handleFilter}
                        checked={type === "movie"}
                    />
                    <span>Movies only</span>
                </label>
                <label htmlFor="series">
                    <input
                        className="with-gap"
                        id="series"
                        type="radio"
                        name="type"
                        value="series"
                        onChange={handleFilter}
                        checked={type === "series"}
                    />
                    <span>Series only</span>
                </label>
            </div>
        </form>
    )
}

export default Search;
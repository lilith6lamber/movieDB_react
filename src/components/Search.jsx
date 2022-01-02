import {Component} from "react";

class Search extends Component {

    state = {
        query: '',
        type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.props.searchMovies(this.state.query, this.state.type)
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.searchMovies(this.state.query, this.state.type)
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.value}), () => {
            this.props.searchMovies(this.state.query, this.state.type)
        })
    }

    render() {
        return (
            <form className="search">
                <div className="wrapper">
                    <input
                        className="search_field"
                        id="searchField"
                        type="search"
                        placeholder="Search"
                        value={this.state.query}
                        onChange={(event => this.setState({query: event.target.value}))}
                        onKeyDown={this.handleKey}
                    />
                    <button className="search_btn" onClick={this.handleClick} type="submit">Search</button>
                </div>
                <div className="search_filters">
                    <label htmlFor="all">
                        <input
                            className="with-gap"
                            id="all"
                            type="radio"
                            name="type"
                            value="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
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
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
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
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </form>
        )
    }
}

export default Search;
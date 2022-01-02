import Movie from "./Movie";

function Movies(props) {
    const {movies = []} = props;
    return (
        <ul className="list">
            {movies.length ? movies.map(movie => {
                return <Movie key={movie.imdbID} {...movie}/>
            }) : <h4 className="noResult">Nothing found</h4>
            }
        </ul>
    )
}

export default Movies;
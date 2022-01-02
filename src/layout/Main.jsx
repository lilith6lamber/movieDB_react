import {Component} from "react";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import Movies from "../components/Movies";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=blade`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (query, type = "all") => {
        this.setState({loading: true})
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render() {
        const {movies, loading} = this.state;
        return (
            <main className="content">
                <div className="container">
                    <Search searchMovies={this.searchMovies} />
                    {
                        loading ?  <Preloader /> : <Movies movies={movies}/>
                    }
                </div>
            </main>
        )
    }
}

export default Main;
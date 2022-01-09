import {useEffect, useState} from "react";
import Preloader from "../components/Preloader";
import Search from "../components/Search";
import Movies from "../components/Movies";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setStatus] = useState(true);

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=blade`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setStatus(false);
            })
            .catch(err => {
                console.error(err);
                setStatus(false);
            })
    }, [])

    const searchMovies = (query, type = "all") => {
        setStatus(true);
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setStatus(false);
            })
    }

    return (
        <main className="content">
            <div className="container">
                <Search searchMovies={searchMovies}/>
                {
                    loading ? <Preloader/> : <Movies movies={movies}/>
                }
            </div>
        </main>
    )
}

export default Main;
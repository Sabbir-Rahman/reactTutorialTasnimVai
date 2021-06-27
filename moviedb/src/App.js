import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import {getMoviesByTerm} from "./api/TMDB";
import MovieList from "./components/MovieList";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [movies, setMovies] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        await getMoviesByTerm(searchTerm, setMovies)
    }

    const handleChange = (event) => {

        setSearchTerm(event.target.value)
    }
    return (
        <div>
            <Navbar/>
            <Searchbar handleSubmit={handleSubmit} handleChange={handleChange}/>
            <MovieList movies={movies}/>
        </div>
    )
}

export default App